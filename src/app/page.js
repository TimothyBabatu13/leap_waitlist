import H2 from "@/components/H2";
import RedirectButton from "@/components/RedirectButton";

export default function Home() {
  return (
    <main className="">
      <H2 
        text={"Everyone's unique"}
      /> 
      <H2 
        text={'so let customize our page'}
      />
  
      {/* <Input /> */}
     <div className="flex justify-center">
      <div className="mt-[20px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          <RedirectButton 
            href={"/builder"}
            text="Builders"
          />
          <RedirectButton 
            href={"/educator"}
            text="Educator/KOL"
          />
          <RedirectButton 
            href={"/web3-enthusiast"}
            text="Web3 Enthusiast"
          />
          <RedirectButton 
            href={"/degen"}
            text="Degen"
          />
        </div>
     </div>
    </main>
  );
}
