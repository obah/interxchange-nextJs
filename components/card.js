import Image from "next/image";

export default function Card({ pageUrl, image, heading, body, btnImg }) {
  return (
    <div className="card mx-auto mb-4 w-4/5 rounded-2xl border sm:border-2 md:w-2/5">
      <a
        href={pageUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3"
      >
        <Image src={image} alt={heading} width={260} height={144} />
        <span className="cardText">
          <h3 className="text-lg font-bold  sm:text-2xl">{heading}</h3>
          <div className="mt-4 text-sm font-normal sm:mt-7 sm:text-lg">
            {body}
          </div>
        </span>
        <button className="rounded-full bg-yellow-200 hover:bg-yellow-300 sm:p-4">
          <Image src={btnImg} alt="nft image" />
        </button>
      </a>
    </div>
  );
}
