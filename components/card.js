import Image from "next/image";

export default function Card({ pageUrl, image, heading, body, btnImg }) {
  return (
    <div className="mx-auto mb-4 h-[80px] w-11/12 rounded-2xl border md:h-[100px] md:w-[500px] md:rounded-[32px] lg:h-[171px] lg:w-[600px] lg:border-2">
      <a
        href={pageUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center gap-4 md:gap-5 lg:gap-3"
      >
        <Image
          src={image}
          alt={heading}
          width={260}
          height={144}
          className="h-[78px] w-2/5 rounded-l-2xl md:h-[98px] md:rounded-l-[32px] lg:h-[168px] lg:w-[260px] lg:rounded-l-none"
        />

        <div className="w-1/2 pr-0 lg:w-2/5 lg:pr-2">
          <h3 className="text-md font-bold md:text-lg  lg:text-2xl">
            {heading}
          </h3>
          {/* TODO truncate this to 2 lines */}
          <p className="mt-2 line-clamp-2 h-auto text-xs font-normal md:mt-4 md:line-clamp-none md:text-sm lg:mt-7 lg:text-lg">
            {body}
          </p>
        </div>

        <button className="absolute -right-3 rounded-full bg-yellow-200 p-1 hover:bg-yellow-300 lg:-right-6 lg:block lg:p-3">
          <Image
            src={btnImg}
            alt="nft image"
            className="h-4 w-4 lg:h-5 lg:w-5"
          />
        </button>
      </a>
    </div>
  );
}
