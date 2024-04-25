import Image from "next/image";

export default function Nav() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Image src={'/home.svg'} width={30} height={30} alt={"home"} />
          </li>
        </ul>
      </nav>
    </>
  )
}