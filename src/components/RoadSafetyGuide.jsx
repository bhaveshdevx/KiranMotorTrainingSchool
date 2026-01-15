import React from "react";
import driveSafely from "../assets/images/drive safely.webp";
import driveGif from "../assets/images/driveGif.gif";
import parking from "../assets/images/parking.webp";
import learnerLicence from "../assets/images/learner licence.webp";
import rules from "../assets/images/rules.webp";
import vehicles from "../assets/images/vehicles.jpg";
export default function RoadSafetyGuide() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-10">
      {/* Header */}
      {/* Image Placeholder - Hero */}
      <div className="relative w-full h-full rounded-2xl overflow-hidden">

        {/* Image */}
        <img
          src={driveGif}
          alt="Drive Safely"
          className="w-full h-108 object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Text */}
        <h1 className="absolute inset-0 flex items-center justify-center 
                 text-white text-7xl font-bold text-center px-4">
          Road Safety Guide in India
        </h1>

      </div>



      {/* Section: Documents to Carry */}
      <section className="bg-white shadow rounded-2xl p-6 flex flex-col md:flex-row gap-4 items-start">

        {/* Left */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-xl font-semibold mb-4">
            Documents to Carry While Driving
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Driving License</li>
            <li>Vehicle Registration Book</li>
            <li>Vehicle Fitness Certificate (for transport vehicles)</li>
            <li>P.U.C. Certificate</li>
            <li>Vehicle Insurance</li>
            <li>Road Permit (for transport vehicles)</li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 w-full flex justify-center md:justify-end">
          <img
            src={driveSafely}
            alt="Drive Safely"
            className="h-auto w-full max-h-56 object-contain"
          />
        </div>

      </section>





      {/* Section: Parking Rules */}
      <section className="bg-white shadow rounded-2xl p-6 flex flex-col md:flex-row gap-4 items-start">
        {/* Image Placeholder */}
        <div className="md:w-1/2 w-full flex justify-center md:justify-end">
          <img
            src={parking}
            alt="Drive Safely"
            className="h-auto w-full max-h-56 object-contain"
          />
        </div>

        {/* Left */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-xl font-semibold mb-4">Parking Rules</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Park according to signal boards and road markings</li>
            <li>Ensure your vehicle does not inconvenience others</li>
            <li>Stop engine, remove key, pull hand brake and engage 1st gear</li>
            <li>
              Never park on footpath, near traffic signals, bus stands, fire
              hydrants, road corners and no-parking zones
            </li>
          </ul>
        </div>

      </section>

      {/* Section: Learner’s License Rules */}
      <section className="bg-white shadow rounded-2xl p-6 flex flex-col md:flex-row gap-4 items-start">        {/* Image Placeholder */}
        <div className="md:w-1/2 w-full">

          <h2 className="text-xl font-semibold mb-4">Learner’s License Rules</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Valid only for 6 months</li>
            <li>Mandatory to display L sign on vehicle</li>
            <li>Valid throughout India (if issued in Maharashtra)</li>
            <li>Drive only when accompanied by a permanent license holder</li>
            <li>Do not drive if license is revoked</li>
          </ul>
        </div>

        {/* Image Placeholder */}
        <div className="md:w-1/2 w-full flex justify-center md:justify-end">
          <img
            src={learnerLicence}
            alt="Drive Safely"
            className="h-auto w-full max-h-56 object-contain"
          />
        </div>
      </section>

      {/* Section: General Driving Tips */}
      {/* Section: Learner’s License Rules */}
      <section className="bg-white shadow rounded-2xl p-6 flex flex-col md:flex-row gap-4 items-start">
        {/* Image Placeholder */}
        <div className="md:w-1/2 w-full flex justify-center md:justify-end">
          <img
            src={rules}
            alt="Drive Safely"
            className="h-auto w-full max-h-56 object-contain"
          />
        </div>
        {/* Image Placeholder */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-xl font-semibold mb-4">General Driving Tips</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Keep a safe distance from the vehicle ahead</li>
            <li>Do not blow horn in silent zones</li>
            <li>Single yellow line: Parking prohibited</li>
            <li>Double yellow line: Parking & stopping prohibited</li>
            <li>Apply brakes first, then clutch while slowing</li>
            <li>Proceed carefully at ungated railway crossings</li>
            <li>Use same gear while driving downhill as uphill</li>
          </ul>
        </div>

      </section>

      {/* Section: Traffic Rules */}
      {/* Section: Learner’s License Rules */}
      <section className="bg-white shadow rounded-2xl p-6 flex flex-col md:flex-row gap-4 items-start">
        {/* Image Placeholder */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-xl font-semibold mb-4">Traffic Rules to Follow</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Always stop at red light unless instructed by police</li>
            <li>Stop at zebra crossing for pedestrians</li>
            <li>Use left lane for left turns, right lane for right turns</li>
            <li>Overtake only from right side</li>
            <li>Use rightmost lane on expressway for overtaking</li>
            <li>Keep headlights on low beam at night on well-lit roads</li>
            <li>Do not use mobile phone while driving</li>
            <li>Follow lane markings and use indicators</li>
            <li>Obey traffic police instructions</li>
            <li>Raise right arm vertically when stopping</li>
            <li>Wait for green signal while taking U-turn</li>
            <li>Give way to traffic from right at intersections</li>
            <li>Allow pedestrians to cross first</li>
          </ul>
        </div>

        {/* Image Placeholder */}
        <div className="md:w-1/2 w-full flex justify-center md:justify-end">
          <img
            src={vehicles}
            alt="Drive Safely"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm">
        Stay safe. Follow traffic rules. Save lives.
      </footer>
    </div>
  );
}
