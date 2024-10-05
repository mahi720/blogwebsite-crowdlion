import { useState } from "react";
import InputBox from "./input.component";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import AnimationWrapper from "../common/page-animation";

const ContectNav = () => {
  const [open, setOpen] = useState(false);
  const [Category, setCategory] = useState("Category");
  const handleCategory = (cat) => {
    setCategory(cat);
    setOpen(!open);
  };
  return (
    <AnimationWrapper>
      <section>
        <div>
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-1 md:gap-5">
              <div>
                <InputBox
                  name="fullname"
                  type="text"
                  placeholder="Full Name"
                  icon="fi-rr-user"
                />
              </div>
              <div>
                <InputBox
                  name="email"
                  type="text"
                  placeholder="Email"
                  icon="fi-rr-envelope"
                />
              </div>

              <div className="relative">
                <InputBox
                  name="Category"
                  type="text"
                  placeholder={Category}
                  // icon="fi-rr-envelope"
                />
                {open ? (
                  <RiArrowDropUpLine
                    size={35}
                    className="absolute top-2.5 "
                    onClick={() => setOpen(!open)}
                  />
                ) : (
                  <RiArrowDropDownLine
                    size={35}
                    className="absolute top-2.5 "
                    onClick={() => setOpen(!open)}
                  />
                )}
                {open && (
                  <div className="w-[100px] input-box absolute top-11  flex flex-col justify-center items-center gap-2 cursor-pointer shadow-2xl">
                    <h1
                      className="hover:text-rose-400 w-full flex justify-start"
                      onClick={() => handleCategory("Hello1")}
                    >
                      Hello1
                    </h1>
                    <h1
                      className="hover:text-rose-400"
                      onClick={() => handleCategory("Hello2")}
                    >
                      Hello2
                    </h1>
                    <h1
                      className="hover:text-rose-400"
                      onClick={() => handleCategory("Hello3")}
                    >
                      Hello3
                    </h1>
                  </div>
                )}
              </div>

              <textarea
                className="input-box h-64 lg:h-40 resize-none leading-7 mt-5 pl-5"
                placeholder="Bio"
              ></textarea>
              <div className="flex justify-center items-center mt-8">
                <button className="btn-dark">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimationWrapper>
  );
};
export default ContectNav;
