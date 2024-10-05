import { useEffect, useRef, useState } from "react";

const InpageNavigation = ({
  routes,
  defaultHidden = [],
  defaultActiveIndex = 0,
  children,
}) => {
  const activeTabLineRef = useRef(null);
  const [inPageNavIndex, setInPageNavIndex] = useState(defaultActiveIndex);

  let [isResizeEventAdded, setIsResizeEventAdded] = useState(false);

  let [width, setWidth] = useState(window.innerWidth);

  const changePageState = (btn, i) => {
    const { offsetWidth, offsetLeft } = btn;

    if (activeTabLineRef.current) {
      activeTabLineRef.current.style.width = `${offsetWidth}px`;
      activeTabLineRef.current.style.left = `${offsetLeft}px`;
    }

    setInPageNavIndex(i);
  };

  useEffect(() => {
    if (width > 766 && inPageNavIndex != defaultActiveIndex) {
      changePageState(defaultButton, defaultActiveIndex);
    }
    const defaultButton = document.querySelector(
      `button[data-index="${defaultActiveIndex}"]`
    );
    if (defaultButton) {
      changePageState(defaultButton, defaultActiveIndex);
    }

    if (!isResizeEventAdded) {
      window.addEventListener("resize", () => {
        if (!isResizeEventAdded) {
          setIsResizeEventAdded(true);
        }
        setWidth(window.innerWidth);
      });
    }
  }, [defaultActiveIndex, width]);

  return (
    <>
      <div className="relative mb-8 bg-white border-b border-grey flex flex-nowrap overflow-x-auto">
        {routes.map((route, i) => (
          <button
            key={i}
            data-index={i}
            className={
              "p-4 px-5 capitalize " +
              (inPageNavIndex === i ? "text-black" : "text-dark-grey") +
              (defaultHidden.includes(route) ? " md:hidden " : " ")
            }
            onClick={(e) => changePageState(e.currentTarget, i)}
          >
            {route}
          </button>
        ))}
        <hr ref={activeTabLineRef} className="absolute bottom-0 duration-300" />
      </div>

      {Array.isArray(children) ? children[inPageNavIndex] : children}
    </>
  );
};

export default InpageNavigation;
