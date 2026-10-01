"use client";

import React, { useState, useEffect } from "react";
import { branches } from "@/data/branches";
import {
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Building,
  User,
  Search,
  Navigation,
  CheckCircle2,
  Clock,
  Send,
  Sparkles,
  Shield
} from "lucide-react";
import SafeImage from "@/components/ui/SafeImage";

const CITIES = ["All", "Dhaka", "Chattogram", "Gazipur", "Bogura", "Rangpur", "Rajshahi", "Feni"] as const;

export default function LocationPage() {
  const [selectedCity, setSelectedCity] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpenNow, setIsOpenNow] = useState(false);
  const [currentBstTime, setCurrentBstTime] = useState("");

  // Determine if branches are currently open under Bangladesh Banking Hours (Sun - Thu, 9:30 AM - 4:00 PM BST)
  useEffect(() => {
    const checkBankingHours = () => {
      // Create date object for Bangladesh time (UTC + 6)
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const bstDate = new Date(utc + 3600000 * 6);

      const day = bstDate.getDay(); // 0 = Sunday, 1 = Monday, ..., 5 = Friday, 6 = Saturday
      const hour = bstDate.getHours();
      const min = bstDate.getMinutes();
      const timeInMinutes = hour * 60 + min;

      // Bangladesh banking days: Sunday (0) to Thursday (4)
      const isBankingDay = day >= 0 && day <= 4;
      // Banking hours: 9:30 AM (570 min) to 4:00 PM (960 min)
      const isWithinHours = timeInMinutes >= 570 && timeInMinutes <= 960;

      setIsOpenNow(isBankingDay && isWithinHours);
      setCurrentBstTime(
        bstDate.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true
        }) + " BST"
      );
    };

    checkBankingHours();
    const interval = setInterval(checkBankingHours, 60000);
    return () => clearInterval(interval);
  }, []);

  const filteredBranches = branches.filter((b) => {
    const matchesCity = selectedCity === "All" || b.city === selectedCity;
    const matchesQuery =
      searchQuery === "" ||
      b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (b.headName && b.headName.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCity && matchesQuery;
  });

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-nhfil-blue/10 text-nhfil-blue text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-4 h-4" />
            <span>Nationwide Presence & Branch Operations</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-heading">
            Locate Our Branches & Head Offices
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            National Housing Finance PLC operates with 9 strategic regional branches and corporate head offices across Bangladesh to provide specialized home loan and wealth advisory services.
          </p>

          {/* Live Banking Status Banner */}
          <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-2xl bg-white border border-slate-200 shadow-sm text-xs font-semibold">
            <span className="relative flex h-2.5 w-2.5">
              {isOpenNow ? (
                <>
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </>
              ) : (
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-slate-400"></span>
              )}
            </span>
            <span className={isOpenNow ? "text-emerald-700 font-bold" : "text-slate-600 font-medium"}>
              {isOpenNow
                ? "Counters Open Now (Official Banking: 9:30 AM – 4:00 PM)"
                : "Counters Closed (Re-opens next banking day at 9:30 AM BST)"}
            </span>
            {currentBstTime && (
              <span className="text-slate-400 border-l border-slate-200 pl-2 text-[11px]">
                {currentBstTime}
              </span>
            )}
          </div>

          {/* Search & Filter Bar */}
          <div className="pt-4 space-y-4">
            {/* Search Input */}
            <div className="relative max-w-md mx-auto">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
              <input
                type="text"
                placeholder="Search branch name, manager, or district..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-nhfil-blue/50 shadow-sm"
              />
            </div>

            {/* City Tabs */}
            <div className="flex flex-wrap justify-center gap-1.5 pt-2">
              {CITIES.map((city) => (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                    selectedCity === city
                      ? "bg-nhfil-blue text-white shadow-md shadow-nhfil-blue/25"
                      : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Branch Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBranches.map((branch) => (
            <div
              key={branch.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-300 p-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-[10px] font-bold uppercase tracking-wider flex items-center space-x-1">
                    <Building className="w-3 h-3 text-nhfil-blue" />
                    <span>{branch.type}</span>
                  </span>
                  <span className="text-xs font-bold text-nhfil-blue">{branch.city}</span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-heading">
                    {branch.name}
                  </h3>
                  <div className="flex items-start space-x-2 text-xs text-slate-500 mt-2">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <p className="leading-relaxed">{branch.address}</p>
                  </div>
                </div>

                {/* Contact Points */}
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-slate-700">
                      <Phone className="w-3.5 h-3.5 text-nhfil-blue shrink-0" />
                      <span className="font-semibold">{branch.phone}</span>
                    </div>
                    <a
                      href={`tel:${branch.phone.replace(/[^0-9+]/g, "")}`}
                      className="text-[11px] font-bold text-nhfil-blue hover:underline"
                    >
                      Call Desk
                    </a>
                  </div>

                  {branch.mobile && (
                    <div className="flex items-center justify-between text-slate-700">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Mob: {branch.mobile}</span>
                      </div>
                      <a
                        href={`https://wa.me/88${branch.mobile.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                          `Hello National Housing Finance ${branch.name}, I am interested in home loan / deposit services.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-bold text-emerald-600 hover:underline flex items-center space-x-1"
                      >
                        <Send className="w-3 h-3" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  )}

                  <div className="flex items-center space-x-2 text-slate-700 truncate">
                    <Mail className="w-3.5 h-3.5 text-nhfil-blue shrink-0" />
                    <a href={`mailto:${branch.email}`} className="hover:underline truncate">
                      {branch.email}
                    </a>
                  </div>
                </div>

                {/* Branch Head Profile */}
                {branch.headName && (
                  <div className="pt-3 border-t border-slate-100 flex items-center space-x-3">
                    {branch.headImage ? (
                      <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-slate-200 shrink-0">
                        <SafeImage
                          src={branch.headImage}
                          alt={branch.headName}
                          fill
                          sizes="48px"
                          fallbackSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-xl bg-nhfil-navy/10 flex items-center justify-center text-nhfil-navy shrink-0">
                        <User className="w-6 h-6" />
                      </div>
                    )}
                    <div className="text-xs">
                      <p className="font-bold text-slate-900">{branch.headName}</p>
                      <p className="text-[11px] text-slate-500">{branch.headTitle}</p>
                      {branch.headMobile && (
                        <p className="text-[11px] text-nhfil-blue font-semibold mt-0.5">
                          Direct: {branch.headMobile}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation Actions */}
              <div className="pt-6 mt-4 border-t border-slate-100 grid grid-cols-2 gap-2">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                    `${branch.name} National Housing Finance ${branch.address}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl border border-slate-200 hover:border-nhfil-blue hover:bg-nhfil-blue/5 text-slate-700 hover:text-nhfil-blue text-xs font-bold flex items-center justify-center space-x-1.5 transition-all shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5 text-nhfil-blue" />
                  <span>Directions</span>
                </a>

                <a
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center justify-center space-x-1 transition-all"
                >
                  <span>Google Map</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
