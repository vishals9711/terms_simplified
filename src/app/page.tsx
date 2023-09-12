import { ChatWindow } from "@/components/ChatWindow";

export default function Home() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
        {` ▲ TermsEase 📜✨`}
      </h1>
      <ul>
        <li className="text-l">
          {`🤖`}
          <span className="ml-2">
            {`Welcome to TermsEase! This innovative app is designed to simplify terms and conditions, consent forms, and engage in friendly conversations with users to make complex legal language more accessible.`}
          </span>
        </li>
        <li className="text-l">
          {`💼`}
          <span className="ml-2">
            {`Our secret sauce? A powerful combination of Next.js and LangChain.js, two cutting-edge technologies that drive the core functionality of this app.`}
          </span>
        </li>
        <li className="text-l">
          {`💡`}
          <span className="ml-2">
            {`Wondering how it works? Dive into the magic behind the scenes by exploring the prompt and model logic in [Specify the path where your key logic resides, e.g., app/api/chat/route.ts].`}
          </span>
        </li>
        <li className="text-l">
          {`🌟`}
          <span className="ml-2">
            {`TermsEase is all about simplification. It helps users understand complex legal documents and engage in friendly conversations without providing legal advice.`}
          </span>
        </li>
        <li className="text-l">
          {`🎨`}
          <span className="ml-2">
            {`The heart of our creation beats in [Specify where the main frontend logic resides, e.g., app/page.tsx]. This is where the user experience comes to life.`}
          </span>
        </li>
        <li className="text-l">
          {`🌐`}
          <span className="ml-2">
            {`We believe in the power of collaboration, so we've made our template open source. You're welcome to peek under the hood, tinker with the code, and even deploy your very own version from our GitHub repository!`}
          </span>
        </li>
        <li className="text-l">
          {`👇`}
          <span className="ml-2">
            {`Ready to explore? Feel free to ask questions like "How does it work?" or "Can you explain the app's functionality?"`}
          </span>
        </li>
      </ul>
    </div>
  );
  
  
  
  
  return (
    <ChatWindow
    endpoint="api/chat/retrieval"
    emptyStateComponent={InfoCard}
    showIngestForm={true}
    showIntermediateStepsToggle={true}
    placeholder={
      "Ready to explore? Feel free to ask questions like, 'How can TermsEase simplify complex terms and conditions for me?'"
    }
    emoji="🐶"
    titleText="Lenny the legal beagle"
  ></ChatWindow>
  );
}
