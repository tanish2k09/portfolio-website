import { memo } from "react";
import WorkGridMasonry from "./WorkGridMasonry.jsx";

const WorkBlock = memo(() => {
    return <section id="second_block" className="mt-12 md:mt-32 relative inline-block w-full md:pr-48">
        <div
            id="work_showcase_text"
            className="font-semibold font-display big-text-heading text-textdarker dark:text-secondary md:dark:text-shadow-md dark:text-shadow-min pl-4 md:pl-6 lg:pl-8 xl:pl-12 transition-all"
        >
            <span className="text-textdarker dark:text-primary transition-all">Work</span> showcase:
        </div>
        <div id="work_grid_container" className="xl:mt-4 md:pl-2 lg:pl-6 xl:pl-8 w-full">
            <WorkGridMasonry />
        </div>
    </section>
});

export default WorkBlock;