import React from 'react';
import Tag from './Tag';
import SCE from "../assets/sce-p4xl-mock.png";
import KLAPSE from "../assets/klapse.png";
import MUSICBENDER from "../assets/musicbender.svg"

export default function WorkGrid() {
  return (
    <div className="flex">
      <div className="grid xl:grid-rows-1 xl:grid-cols-1">
        <div className="work-card xl:max-w-sm">
          <div className="bg-sceteal w-full">
            <img src={SCE} className="object-contain xl:max-h-50p mx-auto" />
          </div>
          <div className="bg-scedark font-body relative inline-block w-full">
            <div className="mt-2 mx-2 inline-block">
              <Tag text="Android" colorClass="bg-sceteal" />
              <Tag text="Java" colorClass="bg-sceteal" />
              <Tag text="Kotlin" colorClass="bg-sceteal" />
              <Tag text="XML" colorClass="bg-sceteal" />
            </div>
            <br />
            <div className="inline-block">
              <div className="mt-8 mx-4 text-lg">
                <span className="underline">
                  Smurf Config Editor
            </span>
              </div>
              <br />
              <div className="my-4 mx-4 inline-block text-sm">
                An beautiful, fast and modern Android companion app for SmurfKernel
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid xl:grid-cols-1 xl:grid-rows-1 xl:ml-4">
        <div className="work-card">
          <img src={KLAPSE} className="object-contain max-w-md" />
          <div className="bg-klapsewhite font-mono relative">
            <div className="mt-4 ml-2 inline-block">
              <Tag text="Android" colorClass="bg-white" />
              <Tag text="Linux" colorClass="bg-white" />
              <Tag text="C" colorClass="bg-white" />
              <Tag text="Makefile" colorClass="bg-white" />
            </div>
            <br />
            <div className="mt-8 mx-4 inline-block font-body text-lg">
              <span className="underline">
                K-LAPSE
            </span>
            </div>
            <br />
            <div className="my-4 mx-4 inline-block text-sm font-body">
              A Linux-kernel-level linear RGB interpolating module
          </div>
          </div>
        </div>
        <div className="work-card bg-mbpink align-center justify-center flex"><img src={MUSICBENDER} className="block" /></div>
        <div className="work-card">1</div>
        <div className="work-card">1</div>
        <div className="work-card">1</div>
        <div className="work-card">1</div>
      </div >
    </div>
  );
}
