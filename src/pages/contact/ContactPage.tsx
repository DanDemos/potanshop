import ContactImg from "../../assets/contact-img.png";
import DefaultLayout from "../../layout/DefaultLayout";
import { useTypedTranslation } from "../../translation/useTypedTranslation.ts";
import callApi from "../../services/api/apiClient";
import { useSearchParams } from "react-router-dom";
import { BenefitsComponent } from "../../components/BenefitsComponent";
import { RootState } from "../../redux/store/configureStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faEnvelopeOpen,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Tilt } from "react-tilt";
import { useForm } from "react-hook-form";
import { ContactFormData, contactSchema } from "./contactSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import ToastComponent from "../../components/toast/ToastComponent";
import { FaViber } from "react-icons/fa";
import Button from "../../components/Button";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(0.03, 0.98, 0.52, 0.99)", // Easing on enter/exit.
};

export default function ContactPage(): React.JSX.Element {
  const { Translate, translation } = useTypedTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  function Submit(data: ContactFormData) {
    callApi("contact/submit")
      .withBody(data)
      .loadingGroup("contact")
      .execute()
      .then((res) => {
        if (res?.mail_status === "sent") {
          reset();
        } else {
          toast.error(
            <ToastComponent
              title={Translate(translation.main.error)}
              description={
                res?.message
                  ? res?.message
                  : Translate(translation.main.unexpected_error)
              }
            />
          );
        }
      })
      .catch((err) => {
        toast.error(
          <ToastComponent
            title={Translate(translation.main.error)}
            description={
              typeof err?.message === "string"
                ? err?.message
                : Translate(translation.main.unexpected_error)
            }
          />
        );
      });
  }

  return (
    <DefaultLayout>
      {/* Hot Products Section */}
      <div className="bg-w-full bg-no-repeat bg-center bg-cover">
        <div className="w-full min-h-screen flex flex-wrap justify-center items-center p-[15px] bg-sky-500">
          <div
            className="w-[1163px] bg-white overflow-hidden flex flex-wrap justify-between 
            pt-[110px] pb-[157px] pl-[148px] pr-[130px]
            max-[992px]:pl-[90px] max-[992px]:pr-[80px]
            max-[768px]:pl-[80px] max-[768px]:pr-[80px]
            max-[576px]:px-[15px]"
          >
            <Tilt
              options={defaultOptions}
              className="w-[310px] pt-[55px] 
                max-[1200px]:w-[33.5%] 
                max-[992px]:w-[35%] 
                max-[768px]:hidden transition ease-cubicbezier-ease"
            >
              <img className="max-w-full" src={ContactImg} alt="IMG" />
            </Tilt>

            <form
              className="w-[390px] 
              max-[1200px]:w-[44%]
              max-[992px]:w-[55%]
              max-[768px]:w-full"
              onSubmit={handleSubmit(Submit)}
            >
              <span
                className="block font-[Montserrat-ExtraBold] 
                text-[24px] text-[#333333] leading-[1.2] text-left pb-[36px]"
              >
                {Translate(translation.contact.get_in_touch)}
              </span>

              <div className="group relative w-full z-[1] mb-[10px]">
                <input
                  className="block w-full bg-[#e6e6e6] font-bold text-[15px] 
                  leading-[1.5] text-[#666666] h-[50px] 
                  pt-0 pr-[30px] pb-0 pl-[50px] outline-hidden border-0 
                focus:text-sky-500 peer"
                  type="text"
                  name="name"
                  placeholder={Translate(translation.main.name)}
                  {...register("name")}
                />
                <span className="block absolute bottom-0 left-0 w-full h-full text-sky-500 pl-[22px] peer-focus:animate-anim-shadow -z-[1]"></span>
                <span
                  className="flex items-center absolute bottom-0 left-0
                  w-full h-full pl-[30px] pointer-events-none
                  text-[#aaaaaa] text-[15px]
                  transition-all duration-400 peer-focus:ps-[22px] peer-focus:text-sky-500"
                >
                  <FontAwesomeIcon icon={faUser} />
                </span>

                {errors?.name && (
                  <>
                    <span
                      className="absolute max-w-[70%] bg-white border 
                    border-red-500 rounded-full py-1 px-[30px] pl-[10px] top-1/2
                      right-2 pointer-events-none cursor-default font-medium text-red-500 text-[13px] 
                      leading-[1.4] text-left opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300 ease-in-out transform translate-y-[-50%]"
                    >
                      {errors?.name?.message
                        ? errors?.name?.message
                        : "Unexpected Error"}
                    </span>
                    <FontAwesomeIcon
                      icon={faCircleExclamation}
                      className="block absolute text-red-500 top-[50%] transform translate-y-[-50%] right-[13px]"
                    />
                  </>
                )}
              </div>

              <div className="group relative w-full z-[1] mb-[10px]">
                <input
                  className="block w-full bg-[#e6e6e6] font-bold text-[15px] leading-[1.5] text-[#666666] h-[50px] pt-0 pr-[30px] pb-0 pl-[54px] outline-hidden border-0 focus:text-sky-500 peer"
                  type="text"
                  name="phone"
                  placeholder={Translate(translation.main.phone)}
                  {...register("phone")}
                />
                <span className="block absolute bottom-0 left-0 w-full h-full text-sky-500 pl-[22px] peer-focus:animate-anim-shadow -z-[1]"></span>
                <span
                  className="flex items-center absolute bottom-0 left-0
                  w-full h-full pl-[30px] pointer-events-none
                  text-[#aaaaaa] text-[15px]
                  transition-all duration-400 peer-focus:ps-[22px] peer-focus:text-sky-500"
                >
                  <FaViber size={18} />
                </span>

                {errors?.phone && (
                  <>
                    <span
                      className="absolute max-w-[70%] bg-white border 
                    border-red-500 rounded-full py-1 px-[30px] pl-[10px] top-1/2
                      right-2 pointer-events-none cursor-default font-medium text-red-500 text-[13px] 
                      leading-[1.4] text-left opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300 ease-in-out transform translate-y-[-50%]"
                    >
                      {errors?.phone?.message
                        ? errors?.phone?.message
                        : "Unexpected Error"}
                    </span>
                    <FontAwesomeIcon
                      icon={faCircleExclamation}
                      className="block absolute text-red-500 top-[50%] transform translate-y-[-50%] right-[13px]"
                    />
                  </>
                )}
              </div>

              <div className="group relative w-full z-[1] mb-[10px]">
                <textarea
                  className="block w-full bg-[#e6e6e6] font-bold text-[15px] leading-[1.5] text-[#666666] h-[50px] min-h-[150px] py-[14px] px-[30px] outline-hidden border-0 focus:text-sky-500 peer"
                  name="message"
                  placeholder={Translate(translation.main.message)}
                  {...register("message")}
                ></textarea>
                <span className="block absolute bottom-0 left-0 w-full h-full text-sky-500 pl-[22px] peer-focus:animate-anim-shadow -z-[1]"></span>

                {errors?.message && (
                  <>
                    <span
                      className="absolute max-w-[70%] bg-white border 
                    border-red-500 rounded-full py-1 px-[30px] pl-[10px] top-1/2
                      right-2 pointer-events-none cursor-default font-medium text-red-500 text-[13px] 
                      leading-[1.4] text-left opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300 ease-in-out transform translate-y-[-50%]"
                    >
                      {errors?.message?.message
                        ? errors?.message?.message
                        : "Unexpected Error"}
                    </span>
                    <FontAwesomeIcon
                      icon={faCircleExclamation}
                      className="block absolute text-red-500 top-[50%] transform translate-y-[-50%] right-[13px]"
                    />
                  </>
                )}
              </div>

              <Button className="w-full">
                {Translate(translation.contact.send)}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <BenefitsComponent />
    </DefaultLayout>
  );
}
