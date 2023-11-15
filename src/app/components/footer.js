import Link from "next/link";
import { CiFacebook, CiInstagram } from "react-icons/ci";

export default function Footer() {
  return (
    <>
      <footer className="flex">
        <div className="footerContainer flex">
          <p>
            <Link href={"/"}>
              <strong>Premium Q</strong>
            </Link>
          </p>
          <div className="merchLinks flex">
            <Link href="/merch">Merchandise</Link>
            <Link href="/policy">Returns</Link>
            <Link href="/policy">Shipping</Link>
            <Link href="/policy">Privacy Policy</Link>
          </div>
          <div className="aboutLinks flex">
            <Link href="/about">About Us</Link>
            <Link href="/FAQs">FAQs</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
          <div className="socials flex">
            <div className="socialLinks flex">
              <Link href={"/"}>
                <CiFacebook />
              </Link>
              <Link href={"/"}>
                <CiInstagram />
              </Link>
            </div>
          </div>
        </div>
        <div className="footerRights flex">
          <p>Premium products at regular prices</p>
          <p>©2023 Premium Q. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
