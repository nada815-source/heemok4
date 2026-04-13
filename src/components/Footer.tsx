import { Instagram, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white py-24 px-6 md:px-12 border-t border-heemok-text/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <div className="text-3xl font-serif font-bold tracking-widest mb-8">
              희목 <span className="text-heemok-point/30">HEEMOK</span>
            </div>
            <p className="text-heemok-text/50 font-light leading-loose text-sm max-w-xs">
              전통의 미학과 현대의 감각이 만나는 지점. 
              붓 끝에서 피어나는 단아한 정서와 예술적 무게감을 경험해 보세요.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.4em] font-bold text-heemok-point mb-8">Contact</h4>
            <div className="flex items-center gap-4 text-sm text-heemok-text/60 group">
              <Mail size={16} className="text-heemok-point/40 group-hover:text-heemok-point transition-colors" />
              <a href="mailto:contact@heemok.com" className="hover:text-heemok-point transition-colors">contact@heemok.com</a>
            </div>
            <div className="flex items-center gap-4 text-sm text-heemok-text/60 group">
              <Phone size={16} className="text-heemok-point/40 group-hover:text-heemok-point transition-colors" />
              <span>+82 (0)10 1234 5678</span>
            </div>
            <div className="flex items-start gap-4 text-sm text-heemok-text/60 group">
              <MapPin size={16} className="text-heemok-point/40 group-hover:text-heemok-point transition-colors mt-1" />
              <span>서울특별시 종로구 인사동길 12 <br />희목 아틀리에</span>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.4em] font-bold text-heemok-point mb-8">Social</h4>
            <div className="flex gap-6">
              <a href="#" className="w-12 h-12 border border-heemok-text/10 flex items-center justify-center hover:bg-heemok-point hover:text-white transition-all duration-500">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 border border-heemok-text/10 flex items-center justify-center hover:bg-heemok-point hover:text-white transition-all duration-500">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h4 className="text-xs uppercase tracking-[0.4em] font-bold text-heemok-point mb-8">Newsletter</h4>
            <p className="text-xs text-heemok-text/40 mb-6 leading-relaxed">
              새로운 작품과 전시 소식을 이메일로 받아보세요.
            </p>
            <div className="flex border-b border-heemok-text/20 pb-2 group focus-within:border-heemok-point transition-colors">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent text-sm w-full outline-none font-light"
              />
              <button className="text-xs uppercase tracking-[0.2em] font-bold hover:text-heemok-point transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-12 border-t border-heemok-text/5 flex flex-col md:row justify-between items-center gap-6">
          <span className="text-[10px] uppercase tracking-[0.3em] text-heemok-text/30">
            © 2024 HEEMOK. All Rights Reserved.
          </span>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] uppercase tracking-[0.2em] text-heemok-text/30 hover:text-heemok-point transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] uppercase tracking-[0.2em] text-heemok-text/30 hover:text-heemok-point transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
