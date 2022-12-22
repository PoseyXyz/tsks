import React from "react";
import { BsPlusLg } from "react-icons/bs";
import {collectionCardProps} from '../interfaces/interfaces'

function CollectionCard({name, icon, id, iconBg, completed_tasks, total_tasks, border, hover}:collectionCardProps) { 
 
    return (
        <div className={`bg-[#20212C] flex flex-col gap-4 p-4 rounded-2xl duration-700 cursor-pointer hover:-translate-y-3 ${hover} shadow-2xl border border-transparent`}>
            <button className={`shadow-2xl ${iconBg} p-4 rounded-2xl inline self-start mb-8`}>
                <i>{icon}</i>
            </button>

            <span className="text-xl font-black">{name}</span>
            <div className="flex justify-between items-center">
                <span className="text-[#9b9aa1]">{completed_tasks}/{total_tasks} done</span>
                <div className="w-4 h-4 p-4 border-white border-2 rounded-full flex items-center justify-center">
                    <div className={`w-2/4 h-2/4 ${border} p-4 border-2 rounded-full`}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CollectionCard