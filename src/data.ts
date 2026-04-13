import { Work, BlogPost } from './types';

export const works: Work[] = [
  {
    id: '1',
    title: '동행 (Companion)',
    category: 'Fine Art',
    image: 'https://picsum.photos/seed/calligraphy1/1200/1600',
    description: '서로 다른 붓의 결이 만나 하나의 흐름을 이루는 과정을 담았습니다.',
    philosophy: '삶은 혼자 걷는 길이 아니라, 서로의 온기를 나누며 나아가는 여정입니다. 붓의 갈필은 그 치열한 삶의 흔적을, 먹의 농담은 깊어지는 인연의 무게를 상징합니다.'
  },
  {
    id: '2',
    title: '청담 (Pure Talk)',
    category: 'Logo',
    image: 'https://picsum.photos/seed/calligraphy2/1200/1600',
    description: '맑고 담백한 차 한 잔의 여유를 시각화한 브랜드 아이덴티티.',
    philosophy: '복잡한 장식을 걷어내고 본질에 집중했습니다. 한 획의 시작과 끝에 담긴 정적이 브랜드가 지향하는 평온함을 전달합니다.'
  },
  {
    id: '3',
    title: '바람의 노래',
    category: 'Commercial Title',
    image: 'https://picsum.photos/seed/calligraphy3/1200/1600',
    description: '대하소설 타이틀 디자인. 바람에 흩날리는 듯한 유연한 필체.',
    philosophy: '역사의 소용돌이 속에서도 꺾이지 않는 민초들의 생명력을 표현하기 위해 거칠면서도 유려한 필선을 사용했습니다.'
  },
  {
    id: '4',
    title: '고요 (Silence)',
    category: 'Fine Art',
    image: 'https://picsum.photos/seed/calligraphy4/1200/1600',
    description: '여백의 미를 극대화한 작품. 한 점의 무게감.',
    philosophy: '비어있음은 결핍이 아니라 가능성입니다. 캔버스의 80%를 차지하는 여백은 관객의 사유가 머무는 공간이 됩니다.'
  },
  {
    id: '5',
    title: '산수 (Landscape)',
    category: 'Logo',
    image: 'https://picsum.photos/seed/calligraphy5/1200/1600',
    description: '전통 한식 다이닝의 로고 디자인.',
    philosophy: '산의 웅장함과 물의 유연함을 한 글자에 담아 자연의 맛을 추구하는 철학을 표현했습니다.'
  },
  {
    id: '6',
    title: '심연 (Abyss)',
    category: 'Commercial Title',
    image: 'https://picsum.photos/seed/calligraphy6/1200/1600',
    description: '영화 타이틀 디자인. 깊고 어두운 먹의 농담.',
    philosophy: '인간 내면의 깊은 고찰을 담기 위해 겹겹이 쌓아 올린 먹의 층을 활용했습니다.'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '붓을 잡는 마음가짐',
    date: '2024.03.15',
    excerpt: '서예는 단순히 글자를 쓰는 행위가 아니라, 마음을 닦는 수행입니다.',
    content: '서예의 시작은 벼루에 먹을 가는 시간부터입니다. 천천히 먹을 갈며 마음의 소란을 잠재우고, 붓 끝에 온 신경을 집중합니다. 한 획을 긋는 찰나의 순간, 그 안에는 수만 번의 연습과 작가의 철학이 응축되어 있습니다.',
    image: 'https://picsum.photos/seed/blog1/800/600'
  },
  {
    id: '2',
    title: '현대 디자인과 서예의 만남',
    date: '2024.02.20',
    excerpt: '전통의 미학을 현대적인 그리드 시스템에 이식하는 방법.',
    content: '전통 서예의 유려한 곡선과 현대 디자인의 직선적인 그리드는 상충하는 듯 보이지만, 적절한 균형을 찾았을 때 폭발적인 시너지를 냅니다. 여백의 미는 현대 미니멀리즘과 그 궤를 같이합니다.',
    image: 'https://picsum.photos/seed/blog2/800/600'
  }
];
