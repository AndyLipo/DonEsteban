import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const AccordionHome = () => {
    return (
        <section className="bg-[#0d0d0d] min-h-screen py-20 px-4 flex justify-center items-center">
            <div className="w-full max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
                    Preguntas <span className="text-yellow-400">Frecuentes</span>
                </h2>

                <Accordion
                    type="single"
                    collapsible
                    className="space-y-4"
                    defaultValue="item-1"
                >
                    <AccordionItem
                        value="item-1"
                        className="rounded-xl border border-yellow-400 bg-white/5 text-white shadow-lg overflow-hidden backdrop-blur-md"
                    >
                        <AccordionTrigger className="px-6 py-5 text-left text-lg font-semibold data-[state=open]:text-yellow-400">
                            1. What is an AI Music Generator?
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-5 pt-0 text-sm text-gray-200">
                            An AI Music Generator is a tool that uses artificial intelligence
                            to create original music tracks based on user inputs like genre,
                            mood, instruments, or tempo.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-2"
                        className="rounded-xl border border-yellow-400 bg-white/5 text-white shadow-lg overflow-hidden backdrop-blur-md"
                    >
                        <AccordionTrigger className="px-6 py-5 text-left text-lg font-semibold data-[state=open]:text-yellow-400">
                            2. Do I need musical knowledge to use it?
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-5 pt-0 text-sm text-gray-200">
                            No musical background is needed. Our tool is designed for both beginners and professionals.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-3"
                        className="rounded-xl border border-yellow-400 bg-white/5 text-white shadow-lg overflow-hidden backdrop-blur-md"
                    >
                        <AccordionTrigger className="px-6 py-5 text-left text-lg font-semibold data-[state=open]:text-yellow-400">
                            3. Can I use the music commercially?
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-5 pt-0 text-sm text-gray-200">
                            Yes. All music generated can be used commercially without additional royalties.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-4"
                        className="rounded-xl border border-yellow-400 bg-white/5 text-white shadow-lg overflow-hidden backdrop-blur-md"
                    >
                        <AccordionTrigger className="px-6 py-5 text-left text-lg font-semibold data-[state=open]:text-yellow-400">
                            4. What genres or styles does it support?
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-5 pt-0 text-sm text-gray-200">
                            It supports a wide range of genres including pop, electronic, hip-hop, classical, jazz, and more.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    )
}

export default AccordionHome
