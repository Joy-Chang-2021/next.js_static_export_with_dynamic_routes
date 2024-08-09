
export async function generateStaticParams() {
    return [{ dynamic: "contact" }, { dynamic: "copyright" }]
  }

export default function Intro({ params }) {
    const { dynamic } = params
    const text = dynamic[0].toUpperCase() + dynamic.slice(1)
    
    return (
      <p>{text}</p>
    );
  }