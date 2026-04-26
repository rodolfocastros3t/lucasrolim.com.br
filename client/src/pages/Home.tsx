import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/lib/content';
import { useState } from 'react';

/**
 * DESIGN PHILOSOPHY: Corporativo Minimalista Moderno
 * - Hierarquia tipográfica clara com Playfair Display + Inter
 * - Espaço negativo generoso para credibilidade
 * - Paleta neutra com acento azul profundo (#1E3A8A)
 * - Foco em velocidade de carregamento e clareza institucional
 */

const galleryImages = [
  {
    id: 'crasa_motos_1',
    title: 'Crasa Motos - Fachada Principal',
    titleEn: 'Crasa Motos - Main Facade',
    titleZh: 'Crasa Motos - 主要门面',
    url: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032562130/4vJtTbZ69qTG8kKCPnaJSr/WhatsAppImage2026-04-08at18.44.20_ebc85d7a.jpeg'
  },
  {
    id: 'crasa_motos_2',
    title: 'Crasa Motos - Loja Secundária',
    titleEn: 'Crasa Motos - Secondary Store',
    titleZh: 'Crasa Motos - 次要门店',
    url: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032562130/4vJtTbZ69qTG8kKCPnaJSr/WhatsAppImage2026-04-08at18.44.21_8abbb840.jpeg'
  },
  {
    id: 'consorcio_crasa_1',
    title: 'Consórcio Crasa - Prédio Corporativo',
    titleEn: 'Consórcio Crasa - Corporate Building',
    titleZh: 'Consórcio Crasa - 企业大楼',
    url: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032562130/4vJtTbZ69qTG8kKCPnaJSr/WhatsAppImage2026-04-08at18.44.19(1)_2011ce8e.jpeg'
  },
  {
    id: 'consorcio_crasa_2',
    title: 'Consórcio Crasa - Sede Administrativa',
    titleEn: 'Consórcio Crasa - Administrative Headquarters',
    titleZh: 'Consórcio Crasa - 行政总部',
    url: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032562130/4vJtTbZ69qTG8kKCPnaJSr/WhatsAppImage2026-04-08at18.44.20(1)_cf4e665f.jpeg'
  },
  {
    id: 'ford_crasa',
    title: 'Ford Crasa - Concessionária',
    titleEn: 'Ford Crasa - Dealership',
    titleZh: 'Ford Crasa - 经销商',
    url: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032562130/4vJtTbZ69qTG8kKCPnaJSr/WhatsAppImage2026-04-08at18.44.18(1)_f0761fc2.jpeg'
  },
  {
    id: 'crasa_motos_yamaha_1',
    title: 'Crasa Motos Yamaha - Showroom',
    titleEn: 'Crasa Motos Yamaha - Showroom',
    titleZh: 'Crasa Motos Yamaha - 展厅',
    url: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032562130/4vJtTbZ69qTG8kKCPnaJSr/WhatsAppImage2026-04-08at18.44.19(2)_454e6843.jpeg'
  },
  {
    id: 'crasa_motos_yamaha_2',
    title: 'Crasa Motos Yamaha - Loja Moderna',
    titleEn: 'Crasa Motos Yamaha - Modern Store',
    titleZh: 'Crasa Motos Yamaha - 现代门店',
    url: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032562130/4vJtTbZ69qTG8kKCPnaJSr/WhatsAppImage2026-04-08at18.44.20(2)_fc03f322.jpeg'
  },
  {
    id: 'mitsubishi_mito_1',
    title: 'Mitsubishi Mito - Showroom Moderno',
    titleEn: 'Mitsubishi Mito - Modern Showroom',
    titleZh: 'Mitsubishi Mito - 现代展厅',
    url: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032562130/4vJtTbZ69qTG8kKCPnaJSr/WhatsAppImage2026-04-08at18.44.19_be9eb51d.jpeg'
  },
  {
    id: 'ford_crasa_service',
    title: 'Ford Crasa - Serviço Autorizado',
    titleEn: 'Ford Crasa - Authorized Service',
    titleZh: 'Ford Crasa - 授权服务',
    url: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032562130/4vJtTbZ69qTG8kKCPnaJSr/WhatsAppImage2026-04-08at18.44.18_1a03f575.jpeg'
  },
  {
    id: 'fazendinha_park',
    title: 'Fazendinha Adventure Park - Parque Familiar',
    titleEn: 'Fazendinha Adventure Park - Family Park',
    titleZh: 'Fazendinha Adventure Park - 家庭公园',
    url: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032562130/4vJtTbZ69qTG8kKCPnaJSr/pasted_file_Rw3PfN_dronepublicitaria_459a2c98.webp'
  }
];

export default function Home() {
  const { language, setLanguage } = useLanguage();
  const t = content[language];
  const [hoveredCompany, setHoveredCompany] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formMessage, setFormMessage] = useState('');

  const companies = [
    { key: 'crolimAutosGroup', sector: 'automotive', logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032562130/4vJtTbZ69qTG8kKCPnaJSr/crolim_autos_1_1fa755bb.png' },
    { key: 'fordCrasa', sector: 'automotive', logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032562130/4vJtTbZ69qTG8kKCPnaJSr/ford_crasa_1_d11e1aef.png' },
    { key: 'mitsubishiMito', sector: 'automotive', logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032562130/4vJtTbZ69qTG8kKCPnaJSr/mitsubishi_mito_1_126991e5.png' },
    { key: 'suzukiSol', sector: 'automotive', logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032562130/4vJtTbZ69qTG8kKCPnaJSr/suzuki_sol_1_46c45fe3.png' },
    { key: 'mitoSeminovos', sector: 'automotive', logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032562130/4vJtTbZ69qTG8kKCPnaJSr/mito_seminovos_1_6e76d3fe.png' },
    { key: 'yamahaCrasa', sector: 'automotive', logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032562130/4vJtTbZ69qTG8kKCPnaJSr/crasa_motos_1_ab7444be.png' },
    { key: 'consorcio', sector: 'financial', logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032562130/4vJtTbZ69qTG8kKCPnaJSr/consorcio_crasa_9abd9d6f.png' },
    { key: 'imobiliaria', sector: 'realEstate', logo: null },
    { key: 'fazendinha', sector: 'entertainment', logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663032562130/4vJtTbZ69qTG8kKCPnaJSr/fazendinha_park_1_9b521a32.png' },
  ];

  const groupedCompanies = {
    automotive: companies.filter(c => c.sector === 'automotive'),
    financial: companies.filter(c => c.sector === 'financial'),
    realEstate: companies.filter(c => c.sector === 'realEstate'),
    entertainment: companies.filter(c => c.sector === 'entertainment'),
  };

  const getCompanyData = (key: string) => {
    return t.companies[key as keyof typeof t.companies];
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header com seletor de idioma */}
      <header className="border-b border-gray-100 sticky top-0 bg-white z-50">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex-1" />
          <div className="flex gap-3">
            {(['pt', 'en', 'zh'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-3 py-1.5 text-sm font-medium transition-colors duration-200 ${
                  language === lang
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {lang === 'pt' ? 'Português' : lang === 'en' ? 'English' : '中文'}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b border-gray-100 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310419663032562130/4vJtTbZ69qTG8kKCPnaJSr/pasted_file_5lXBnU_WhatsAppImage2019-10-18at16.19.07_2a03e021.jpeg"
            alt="Concessionária"
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-2">
                {t.header.title}
              </h1>
              <p className="text-xl md:text-2xl text-primary font-display font-semibold mb-4">
                {t.header.subtitle}
              </p>
              <p className="text-lg text-gray-600 mb-8">
                {t.header.group}
              </p>
              <div className="prose prose-sm max-w-none text-gray-700 space-y-4">
                <p>{t.about.bio}</p>
                <p>{t.about.bio2}</p>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663032562130/4vJtTbZ69qTG8kKCPnaJSr/pasted_file_7mYPCp_lucasrimgexec_521d16df.webp"
                alt="Lucas Rolim"
                className="w-64 h-auto rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Strip Section */}
      <section className="border-b border-gray-100 py-8 md:py-12 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-display font-semibold text-gray-900">
              {language === 'pt' ? 'Nossas Empresas' : language === 'en' ? 'Our Companies' : '我们的公司'}
            </h3>
            <p className="text-xs text-gray-500">
              {language === 'pt' ? 'Clique para ampliar' : language === 'en' ? 'Click to expand' : '点击放大'}
            </p>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
            {galleryImages.map((image) => (
              <button
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className="flex-shrink-0 relative group overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                <img
                  src={image.url}
                  alt={language === 'pt' ? image.title : language === 'en' ? image.titleEn : image.titleZh}
                  className="w-32 h-24 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-900 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 z-10"
            >
              ✕
            </button>
            <div className="w-full flex items-center justify-center bg-gray-100" style={{maxHeight: 'calc(90vh - 100px)'}}>
              <img
                src={selectedImage.url}
                alt={language === 'pt' ? selectedImage.title : language === 'en' ? selectedImage.titleEn : selectedImage.titleZh}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="bg-gray-50 p-4 border-t border-gray-200">
              <p className="text-gray-900 font-semibold">
                {language === 'pt' ? selectedImage.title : language === 'en' ? selectedImage.titleEn : selectedImage.titleZh}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Automotive Retail Section */}
      <section className="border-b border-gray-100 py-16 md:py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-12">
            {t.sectors.automotive}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {groupedCompanies.automotive.map((company) => {
              const data = getCompanyData(company.key);
              return (
                <div
                  key={company.key}
                  onMouseEnter={() => setHoveredCompany(company.key)}
                  onMouseLeave={() => setHoveredCompany(null)}
                  className="group"
                >
                  <a
                    href={data.url || '#'}
                    target={data.url ? '_blank' : undefined}
                    rel={data.url ? 'noopener noreferrer' : undefined}
                    className={`block p-6 border border-gray-200 rounded-lg transition-all duration-300 ${
                      data.url
                        ? 'hover:border-primary hover:shadow-md cursor-pointer'
                        : 'cursor-default'
                    }`}
                  >
                    {company.logo && (
                      <div className="mb-4 h-20 flex items-center justify-center bg-gray-50 rounded">
                        <img
                          src={company.logo}
                          alt={data.name}
                          className="max-h-16 max-w-full object-contain"
                        />
                      </div>
                    )}
                    <h3 className="font-display font-semibold text-xl text-gray-900 mb-2">
                      {data.name}
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      {data.description}
                    </p>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Financial Services Section */}
      <section className="border-b border-gray-100 py-16 md:py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-12">
            {t.sectors.financial}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {groupedCompanies.financial.map((company) => {
              const data = getCompanyData(company.key);
              return (
                <div key={company.key}>
                  <a
                    href={data.url || '#'}
                    target={data.url ? '_blank' : undefined}
                    rel={data.url ? 'noopener noreferrer' : undefined}
                    className={`block p-6 border border-gray-200 rounded-lg transition-all duration-300 ${
                      data.url
                        ? 'hover:border-primary hover:shadow-md cursor-pointer'
                        : 'cursor-default'
                    }`}
                  >
                    {company.logo && (
                      <div className="mb-4 h-20 flex items-center justify-center bg-gray-50 rounded">
                        <img
                          src={company.logo}
                          alt={data.name}
                          className="max-h-16 max-w-full object-contain"
                        />
                      </div>
                    )}
                    <h3 className="font-display font-semibold text-xl text-gray-900 mb-2">
                      {data.name}
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      {data.description}
                    </p>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Real Estate Section */}
      <section className="border-b border-gray-100 py-16 md:py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-12">
            {t.sectors.realEstate}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {groupedCompanies.realEstate.map((company) => {
              const data = getCompanyData(company.key);
              return (
                <div key={company.key}>
                  <div className="p-6 border border-gray-200 rounded-lg">
                    <h3 className="font-display font-semibold text-xl text-gray-900 mb-2">
                      {data.name}
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      {data.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Entertainment Section */}
      <section className="border-b border-gray-100 py-16 md:py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-12">
            {t.sectors.entertainment}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {groupedCompanies.entertainment.map((company) => {
              const data = getCompanyData(company.key);
              return (
                <div key={company.key}>
                  <a
                    href={data.url || '#'}
                    target={data.url ? '_blank' : undefined}
                    rel={data.url ? 'noopener noreferrer' : undefined}
                    className={`block p-6 border border-gray-200 rounded-lg transition-all duration-300 ${
                      data.url
                        ? 'hover:border-primary hover:shadow-md cursor-pointer'
                        : 'cursor-default'
                    }`}
                  >
                    {company.logo && (
                      <div className="mb-4 h-20 flex items-center justify-center bg-gray-50 rounded">
                        <img
                          src={company.logo}
                          alt={data.name}
                          className="max-h-16 max-w-full object-contain"
                        />
                      </div>
                    )}
                    <h3 className="font-display font-semibold text-xl text-gray-900 mb-2">
                      {data.name}
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      {data.description}
                    </p>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-20 bg-gray-50 border-b border-gray-100">
        <div className="container max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            {language === 'pt' ? 'Entre em Contato' : language === 'en' ? 'Get in Touch' : '联系我们'}
          </h2>
          <p className="text-gray-600 mb-8">
            {language === 'pt' ? 'Preencha o formulário abaixo e nossa equipe responderá em breve.' : language === 'en' ? 'Fill out the form below and our team will respond shortly.' : '填写下面的表格，我们的团队将很快回复。'}
          </p>
          
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setFormStatus('loading');
              setFormMessage('');
              
              try {
                const emailBody = `Essa é uma mensagem de contato através da página de cartão de visitas do site de Lucas Rolim https://lucasrpro.manus.space/\n\n---\n\nNome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`;
                
                // Usando Formspree para enviar o email
                const response = await fetch('https://formspree.io/f/xjgjkakp', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: emailBody
                  })
                });
                
                if (response.ok) {
                  setFormStatus('success');
                  setFormMessage(language === 'pt' ? 'Mensagem enviada com sucesso!' : language === 'en' ? 'Message sent successfully!' : '消息发送成功！');
                  setFormData({ name: '', email: '', message: '' });
                  setTimeout(() => setFormStatus('idle'), 5000);
                } else {
                  setFormStatus('error');
                  setFormMessage(language === 'pt' ? 'Erro ao enviar mensagem. Tente novamente.' : language === 'en' ? 'Error sending message. Try again.' : '发送消息出错。请重试。');
                }
              } catch (error) {
                setFormStatus('error');
                setFormMessage(language === 'pt' ? 'Erro ao enviar mensagem. Tente novamente.' : language === 'en' ? 'Error sending message. Try again.' : '发送消息出错。请重试。');
              }
            }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                {language === 'pt' ? 'Nome' : language === 'en' ? 'Name' : '名字'}
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder={language === 'pt' ? 'Seu nome' : language === 'en' ? 'Your name' : '你的名字'}
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                {language === 'pt' ? 'Email' : language === 'en' ? 'Email' : '电子邮件'}
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder={language === 'pt' ? 'seu@email.com' : language === 'en' ? 'your@email.com' : 'your@email.com'}
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                {language === 'pt' ? 'Mensagem' : language === 'en' ? 'Message' : '信息'}
              </label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder={language === 'pt' ? 'Sua mensagem...' : language === 'en' ? 'Your message...' : '你的信息...'}
              />
            </div>
            
            <button
              type="submit"
              disabled={formStatus === 'loading'}
              className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-blue-800 transition-colors disabled:opacity-50"
            >
              {formStatus === 'loading' ? (language === 'pt' ? 'Enviando...' : language === 'en' ? 'Sending...' : '发送中...') : language === 'pt' ? 'Enviar Mensagem' : language === 'en' ? 'Send Message' : '发送消息'}
            </button>
            
            {formStatus === 'success' && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                ✓ {formMessage}
              </div>
            )}
            
            {formStatus === 'error' && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                ✗ {formMessage}
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container max-w-6xl mx-auto px-4 text-center text-sm">
          {t.footer.copyright}
        </div>
      </footer>
    </div>
  );
}
