import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tag, ArrowRight } from "lucide-react"

const categories = [
  {
    name: "Свитеры и джемперы",
    level: "Все уровни",
    image: "https://cdn.poehali.dev/projects/436467cc-2b6f-41b2-b029-4507efebff53/files/cf42f19a-39d4-4267-9e01-ad137bc8f738.jpg",
    description: "Подробные PDF-схемы с пошаговыми инструкциями на любой вкус",
    price: "от 350 ₽",
  },
  {
    name: "Шапки и шарфы",
    level: "Для начинающих",
    image: "https://cdn.poehali.dev/projects/436467cc-2b6f-41b2-b029-4507efebff53/files/59c36b12-7380-4b3d-bb4e-a6564ec40bc3.jpg",
    description: "Простые и быстрые проекты — идеальный старт для новичков",
    price: "от 199 ₽",
  },
  {
    name: "Игрушки амигуруми",
    level: "Средний уровень",
    image: "https://cdn.poehali.dev/projects/436467cc-2b6f-41b2-b029-4507efebff53/files/5a716246-091d-461c-ac44-d50cf048ab41.jpg",
    description: "Очаровательные вязаные игрушки с детальными схемами",
    price: "от 249 ₽",
  },
  {
    name: "Носки и варежки",
    level: "Для начинающих",
    image: "https://cdn.poehali.dev/projects/436467cc-2b6f-41b2-b029-4507efebff53/files/cf42f19a-39d4-4267-9e01-ad137bc8f738.jpg",
    description: "Тёплые и практичные изделия — незаменимые подарки ручной работы",
    price: "от 199 ₽",
  },
  {
    name: "Кардиганы и жилеты",
    level: "Продвинутый",
    image: "https://cdn.poehali.dev/projects/436467cc-2b6f-41b2-b029-4507efebff53/files/59c36b12-7380-4b3d-bb4e-a6564ec40bc3.jpg",
    description: "Стильные модели в стиле оверсайз — тренды сезона в PDF-формате",
    price: "от 490 ₽",
  },
  {
    name: "Сумки и аксессуары",
    level: "Все уровни",
    image: "https://cdn.poehali.dev/projects/436467cc-2b6f-41b2-b029-4507efebff53/files/5a716246-091d-461c-ac44-d50cf048ab41.jpg",
    description: "Модные сумки, повязки и украшения из пряжи — ваш стиль в деталях",
    price: "от 299 ₽",
  },
]

export function FeaturedDestinations() {
  return (
    <section id="categories" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            Популярные <span className="font-semibold">категории</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            PDF-описания и схемы на все случаи жизни — от первых петель до сложных узоров
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 bg-card hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />

                {/* Level Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <Tag className="h-3.5 w-3.5 text-primary" />
                  <span className="text-xs font-medium">{category.level}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{category.description}</p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm font-semibold text-primary">{category.price}</span>
                  <Button variant="ghost" size="sm" className="group/btn text-foreground hover:text-primary">
                    Смотреть
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Button variant="outline" size="lg" className="rounded-full px-8 border-2 bg-transparent">
            Все категории
          </Button>
        </div>
      </div>
    </section>
  )
}
