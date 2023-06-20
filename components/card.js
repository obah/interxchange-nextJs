import Image from "next/image";

export default function Card({ pageUrl, image, heading, body, btnImg }) {
  return (
    <div className="card">
      <a
        href={pageUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3"
      >
        <Image src={image} alt={heading} width={260} height={144} />
        <span className="cardText">
          <h3>{heading}</h3>
          <div className="font-normal sm:text-lg text-sm mt-4 sm:mt-7">
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
