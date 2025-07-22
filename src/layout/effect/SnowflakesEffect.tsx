import { useEffect } from "react";

const SnowflakesEffect = (): null => {
  useEffect(() => {
    const snowflakesContainer = document.createElement("div");
    snowflakesContainer.classList.add(
      "absolute",
      "top-0",
      "left-0",
      "w-full",
      "h-full",
      "pointer-events-none"
    );
    document.body.appendChild(snowflakesContainer);

    let lastTime = 0; // Keep track of the last time snowflake was created
    const interval = 50; // Time interval in ms to limit snowflakes frequency (larger = less frequent)

    // Replace this with your snowflake PNG URL
    const snowflakeImageUrl = "/src/assets/snowflake.png";

    // Function to create snowflakes
    const createSnowflake = (x:number, y:number) => {
      const random = Math.random() * 3 + 1;
      const snowflake = document.createElement("div");
      snowflake.classList.add("snowflake", "absolute", "opacity-80");
      const size = Math.random() * 15 + 5; // Random size for snowflakes
      snowflake.style.width = `${size}px`;
      snowflake.style.height = `${size}px`;
      snowflake.style.left = `${x - size / 2}px`; // Center the snowflake on the mouse
      snowflake.style.top = `${y - size / 2}px`; // Center the snowflake on the mouse
      snowflake.style.backgroundImage = `url(${snowflakeImageUrl})`;
      snowflake.style.backgroundSize = "cover"; // Make sure the image fits the snowflake container
      snowflake.style.backgroundPosition = "center";
      snowflake.style.animationDuration = `${random}s`;
      snowflake.style.animationTimingFunction = "linear";

      // Append the snowflake to the container
      snowflakesContainer.appendChild(snowflake);

      // Remove snowflake after animation completes
      setTimeout(() => {
        snowflake.remove();
      }, random * 1000); // Same duration as the animation
    };

    // Event listener to track mouse movement
    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastTime > interval) {
        // Check if enough time has passed since last snowflake
        createSnowflake(e.pageX, e.pageY);
        lastTime = now; // Update lastTime to current time
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      snowflakesContainer.remove();
    };
  }, []);

  return null;
};

export default SnowflakesEffect;
