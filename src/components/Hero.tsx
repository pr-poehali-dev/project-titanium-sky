import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-muted/30 to-background">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.poehali.dev/projects/436467cc-2b6f-41b2-b029-4507efebff53/files/5a716246-091d-461c-ac44-d50cf048ab41.jpg"
          alt="Вязание"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center py-32">
        <div className="space-y-8">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-balance">
            Научитесь вязать
            <span className="block font-semibold mt-2">с удовольствием</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            PDF-описания, пошаговые курсы и учебные материалы для начинающих и опытных мастериц — всё для вашего творчества
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-14 text-base group"
            >
              Смотреть каталог
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base border-2 bg-transparent">
              Все курсы
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 md:gap-16 max-w-3xl mx-auto mt-24 pt-16 border-t border-border/50">
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-light">200+</div>
            <div className="text-sm text-muted-foreground">PDF-описаний</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-light">15 000+</div>
            <div className="text-sm text-muted-foreground">Довольных учениц</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-light">4.9</div>
            <div className="text-sm text-muted-foreground">Средний рейтинг</div>
          </div>
        </div>
      </div>
    </section>
  )
}
