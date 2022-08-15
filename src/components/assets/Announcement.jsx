import React from "react";

const Announcement = () => {
  return (
    <div class="px-4 py-3 text-white bg-accent-focus">
      <p class="text-sm font-medium text-center">
        Check out AniMusic's GitHub Repository for source code and to show
        support!
        <a class="underline mx-2" href="/">
          {" "}
          Let's See It! &rarr;{" "}
        </a>
      </p>
    </div>
  );
};

export default Announcement;
