import { memo } from "react";
import WorkGridMasonry from "./WorkGridMasonry.jsx";

const WorkBlock = memo(({ useWorker }) => {
    return <section id="second_block" className="mt-12 md:mt-32 relative inline-block w-full md:pr-48">
        <div
            id="work_showcase_text"
            className="backdrop-blur-sm w-fit rounded-lg font-bold font-display big-text-heading text-textdarker dark:text-secondary md:dark:text-shadow-md dark:text-shadow-min px-2 ml-4 md:ml-6 lg:ml-8 xl:ml-12 transition-all"
        >
            <span className="text-textdarker dark:text-primary transition-all">Work</span> showcase:
        </div>
        <div id="work_grid_container" className="xl:mt-4 md:pl-2 lg:pl-6 xl:pl-8 w-full">
            <WorkGridMasonry useWorker={useWorker} />
        </div>
    </section>
});

export default WorkBlock;