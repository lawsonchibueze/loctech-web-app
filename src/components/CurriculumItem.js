import React from 'react'


export default function CurriculumItem({ title, icon, color, textColor }) {
    return (
      <div className={`flex items-center justify-between py-3 px-4  ${color}`}>
        <p className={`text-sm font-semibold ${textColor}`}> {title}</p>
        <span className="text-xl"> {icon}</span>
      </div>
    );
  }