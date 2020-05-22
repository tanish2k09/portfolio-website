import React from "react";

export default function ProjectCard(props) {
  const gradient_bg = {
    backgroundImage: `linear-gradient(to bottom right, ${props.begin} 0%, ${props.end})`,
  };

  const dimens_100 = {
    height: "100px",
    width: "100px",
  };

  const imgClass =
    "w-0 xl:min-w-100px h-0 xl:min-h-100px self-center inline-block rounded-lg ml-auto";

  const imgContainerStyle = "text-center rounded-lg";
  const lottieContainerStyle =
    "lottie-smurf-container w-0 xl:min-w-100px self-center mx-auto rounded-lg";

  var resource;
  var resourceContainerStyle;

  if (props.text === "Smurf Config Editor") {
    resourceContainerStyle = lottieContainerStyle;
    resource = (
      <lottie-player
        src="https://assets3.lottiefiles.com/packages/lf20_mbwmRj.json"
        background="transparent"
        speed="1"
        style={dimens_100}
        autoplay
        loop
      ></lottie-player>
    );
  } else {
    resourceContainerStyle = imgContainerStyle;
    resource = (
      <img src={props.resource} alt={props.desc} className={imgClass} />
    );
  }

  return (
    <div
      id={props.id}
      className="h-threequarters mx-16 xl:min-w-thirty text-primary transition-all transform duration-500 hover:scale-110"
    >
      <div id="resource_container" className={resourceContainerStyle}>
        {resource}
      </div>
      <div
        id="content"
        className="overflow-y-scroll h-full rounded-t-bigg bg-cards"
      >
        <div
          id="title"
          className="font-display xl:text-2xl text-center my-4 underline"
        >
          {props.text}
        </div>
        <div id="description" className="font-mono mx-8 mt-8">
          This is a whole bunch of hipster ipsum:
          <br />
          I'm baby tote bag gentrify biodiesel offal. Authentic kickstarter
          hoodie pinterest chambray, mixtape listicle XOXO forage meh occupy
          jean shorts tumblr yr. Tofu mlkshk bespoke poutine lumbersexual.
          Mumblecore chillwave cray pabst ugh kinfolk lo-fi kickstarter
          affogato, bitters literally readymade. Tumblr 3 wolf moon lumbersexual
          squid, food truck you probably haven't heard of them wayfarers DIY
          tattooed pitchfork small batch coloring book williamsburg 8-bit VHS.
          Raw denim 90's hexagon green juice heirloom, retro taiyaki vinyl
          glossier before they sold out bespoke. Fam chillwave tousled glossier
          mumblecore mlkshk. Fanny pack narwhal venmo, vinyl synth selvage
          letterpress +1 roof party twee mixtape dreamcatcher.
          <br />
        </div>
      </div>
      <span
        id="drop"
        className="absolute bottom-0 w-full -bottom-bigg self-center gradient-drop rounded-b-bigg"
        style={gradient_bg}
      >
        &nbsp;
      </span>
    </div>
  );
}
