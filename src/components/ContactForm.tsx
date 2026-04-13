import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ChevronRight, ChevronLeft, Send } from 'lucide-react';

const steps = [
  { id: 1, title: '의뢰 유형', description: '어떤 프로젝트를 계획 중이신가요?' },
  { id: 2, title: '예산 및 일정', description: '대략적인 규모와 시기를 알려주세요.' },
  { id: 3, title: '상세 내용', description: '작업에 필요한 세부 사항을 적어주세요.' },
  { id: 4, title: '완료', description: '문의가 성공적으로 접수되었습니다.' },
];

const inquiryTypes = ['로고 디자인', '순수 예술 작품', '북커버/타이틀', '브랜드 컨설팅', '기타'];
const budgetRanges = ['100만원 이하', '100 - 300만원', '300 - 500만원', '500만원 이상', '협의 필요'];

export default function ContactForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    type: '',
    budget: '',
    schedule: '',
    details: '',
    name: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setCurrentStep(4);
    }, 2000);
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 bg-heemok-bg">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.5em] text-heemok-point font-medium mb-4 block">
            Conversion
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Start a Project</h2>
          <p className="text-heemok-text/50 font-light max-w-lg mx-auto leading-relaxed">
            희목의 감성으로 당신의 프로젝트에 생명력을 불어넣으세요. 
            아래 폼을 작성해 주시면 2-3일 내로 연락드리겠습니다.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12 flex justify-between items-center relative">
          <div className="absolute top-1/2 left-0 w-full h-px bg-heemok-text/10 -translate-y-1/2 z-0" />
          {steps.map((step) => (
            <div
              key={step.id}
              className={`relative z-10 flex flex-col items-center gap-2 ${
                currentStep >= step.id ? 'text-heemok-point' : 'text-heemok-text/20'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-serif transition-all duration-500 ${
                  currentStep >= step.id ? 'bg-heemok-point text-white' : 'bg-white border border-heemok-text/10'
                }`}
              >
                {currentStep > step.id ? <CheckCircle2 size={16} /> : step.id}
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium hidden sm:block">
                {step.title}
              </span>
            </div>
          ))}
        </div>

        {/* Form Container */}
        <div className="bg-white p-8 md:p-16 shadow-2xl border border-heemok-text/5 min-h-[500px] flex flex-col">
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex-1"
              >
                <h3 className="text-2xl font-serif mb-4">{steps[0].description}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  {inquiryTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => updateField('type', type)}
                      className={`p-6 text-left border transition-all duration-300 group ${
                        formData.type === type
                          ? 'border-heemok-point bg-heemok-bg/50 text-heemok-point'
                          : 'border-heemok-text/10 hover:border-heemok-point/40'
                      }`}
                    >
                      <span className="text-sm tracking-widest">{type}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex-1"
              >
                <h3 className="text-2xl font-serif mb-8">{steps[1].description}</h3>
                <div className="space-y-10">
                  <div>
                    <label className="text-[10px] uppercase tracking-[0.3em] text-heemok-text/40 mb-4 block">
                      Budget Range
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {budgetRanges.map((range) => (
                        <button
                          key={range}
                          onClick={() => updateField('budget', range)}
                          className={`px-6 py-3 text-xs tracking-widest border transition-all duration-300 ${
                            formData.budget === range
                              ? 'bg-heemok-point text-white border-heemok-point'
                              : 'border-heemok-text/10 hover:border-heemok-text/30'
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-[0.3em] text-heemok-text/40 mb-4 block">
                      Desired Schedule
                    </label>
                    <input
                      type="text"
                      placeholder="예: 2024년 5월 중순까지"
                      value={formData.schedule}
                      onChange={(e) => updateField('schedule', e.target.value)}
                      className="w-full border-b border-heemok-text/10 py-4 focus:border-heemok-point outline-none transition-colors font-light"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex-1"
              >
                <h3 className="text-2xl font-serif mb-8">{steps[2].description}</h3>
                <div className="space-y-8">
                  <textarea
                    placeholder="프로젝트에 대한 상세한 내용을 적어주세요."
                    rows={4}
                    value={formData.details}
                    onChange={(e) => updateField('details', e.target.value)}
                    className="w-full border border-heemok-text/10 p-6 focus:border-heemok-point outline-none transition-colors font-light resize-none bg-heemok-bg/10"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      placeholder="성함 / 기업명"
                      value={formData.name}
                      onChange={(e) => updateField('name', e.target.value)}
                      className="w-full border-b border-heemok-text/10 py-4 focus:border-heemok-point outline-none transition-colors font-light"
                    />
                    <input
                      type="email"
                      placeholder="이메일 주소"
                      value={formData.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      className="w-full border-b border-heemok-text/10 py-4 focus:border-heemok-point outline-none transition-colors font-light"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex-1 flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-20 h-20 bg-heemok-point text-white rounded-full flex items-center justify-center mb-8 shadow-xl">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-serif mb-4">감사합니다.</h3>
                <p className="text-heemok-text/60 font-light leading-relaxed max-w-sm">
                  문의 내용이 성공적으로 전달되었습니다. <br />
                  희목 작가가 내용을 검토한 후 입력하신 이메일로 연락드리겠습니다.
                </p>
                <button
                  onClick={() => {
                    setCurrentStep(1);
                    setFormData({ type: '', budget: '', schedule: '', details: '', name: '', email: '' });
                  }}
                  className="mt-12 text-xs uppercase tracking-[0.3em] font-bold border-b border-heemok-text/20 pb-2 hover:text-heemok-point hover:border-heemok-point transition-all"
                >
                  New Inquiry
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          {currentStep < 4 && (
            <div className="mt-12 pt-8 border-t border-heemok-text/5 flex justify-between items-center">
              <button
                onClick={handleBack}
                disabled={currentStep === 1}
                className={`flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold transition-all ${
                  currentStep === 1 ? 'opacity-0 pointer-events-none' : 'hover:text-heemok-point'
                }`}
              >
                <ChevronLeft size={16} /> Back
              </button>
              
              {currentStep === 3 ? (
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting || !formData.name || !formData.email}
                  className="px-10 py-4 bg-heemok-point text-white text-xs uppercase tracking-[0.3em] font-bold hover:bg-heemok-text transition-all flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Submit'} <Send size={14} />
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  disabled={(currentStep === 1 && !formData.type) || (currentStep === 2 && !formData.budget)}
                  className="px-10 py-4 bg-heemok-text text-white text-xs uppercase tracking-[0.3em] font-bold hover:bg-heemok-point transition-all flex items-center gap-3 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Next <ChevronRight size={14} />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
