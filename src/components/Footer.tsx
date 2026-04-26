import { Facebook, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">ВязаниеПро</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              PDF-описания и курсы по вязанию для всех уровней — создаём вместе с 2020 года
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Категории</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Свитеры и джемперы
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Шапки и шарфы
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Игрушки амигуруми
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Носки и варежки
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Сумки и аксессуары
                </a>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-semibold mb-4">Курсы</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Для начинающих
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Средний уровень
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Продвинутый
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Крючок
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Спицы
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Помощь</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Частые вопросы
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Связаться с нами
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Условия использования
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Возврат средств
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>2025 ВязаниеПро. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
