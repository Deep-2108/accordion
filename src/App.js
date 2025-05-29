import { useState } from "react";
import "./index.css";

const faqs = [
  {
    num:1,
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {num:2,
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {num:3,
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {
  return <div className="content-box accordion">
    <ul >
        {
        faqs.map((faq)=>(
          <AccordionItem num={faq.num} title={faq.title} text={faq.text} key={faq.num}  />
        ))
        }
      </ul>
  </div>;
}
function AccordionItem({num,title,text}){
  const [button,setbutton]=useState("+");
  return (
   <div className={`${button === '-' ? 'open item' : 'x item'}`} onClick={()=>button ==="+" ?setbutton("-") :setbutton("+")}>

        <p className="number">{num}</p>
        <p className="title">{title}</p>
        <button className="icon" onClick={()=>button ==="+" ?setbutton("-") :setbutton("+")}>{button}</button>
        <p className="text">
         {button==="-" ? `${text}` : ""}
          </p>
    </div>
  )
}
