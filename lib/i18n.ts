export type Lang = 'ru' | 'en'

export const dictionary = {
  ru: {
    nav: {
      stays: 'Жильё',
      destinations: 'Направления',
      about: 'О нас',
      contact: 'Контакты',
      listProperty: 'Сдать жильё',
    },
    hero: {
      badge: 'Более 1 200 проверенных объектов',
      title: 'Аренда жилья у Чёрного моря',
      subtitle:
        'Апартаменты, виллы и уютные дома в лучших уголках Крыма. Бронируйте напрямую, без переплат.',
      location: 'Куда',
      locationPlaceholder: 'Ялта, Севастополь, Феодосия…',
      checkin: 'Заезд',
      checkout: 'Выезд',
      guests: 'Гости',
      guestsValue: '2 гостя',
      search: 'Найти жильё',
    },
    destinations: {
      title: 'Популярные направления',
      subtitle: 'Самые любимые места на побережье Крыма',
      properties: 'объектов',
    },
    listings: {
      title: 'Рекомендуемое жильё',
      subtitle: 'Подобрано специально для вашего отдыха',
      viewAll: 'Смотреть все',
      night: 'ночь',
      book: 'Забронировать',
      guests: 'гостей',
      beds: 'спален',
      baths: 'ванных',
    },
    filters: {
      all: 'Все',
      apartment: 'Апартаменты',
      villa: 'Виллы',
      house: 'Дома',
      studio: 'Студии',
    },
    features: {
      title: 'Почему выбирают Krym Rental',
      items: [
        {
          title: 'Проверенные объекты',
          text: 'Каждое жильё лично проверено нашей командой перед публикацией.',
        },
        {
          title: 'Без скрытых комиссий',
          text: 'Честные цены и бронирование напрямую у владельцев.',
        },
        {
          title: 'Поддержка 24/7',
          text: 'Наша команда на связи в любое время во время вашей поездки.',
        },
      ],
    },
    cta: {
      title: 'У вас есть жильё в Крыму?',
      subtitle: 'Разместите объявление и начните принимать',
      button: 'Стать хозяином',
    },
    footer: {
      tagline: 'Аренда жилья у моря по всему Крыму.',
      explore: 'Навигация',
      support: 'Поддержка',
      help: 'Помощь',
      faq: 'Вопросы и ответы',
      terms: 'Условия',
      privacy: 'Конфиденциальность',
      rights: 'Все права защищены.',
    },
    rating: 'рейтинг',
  },
  en: {
    nav: {
      stays: 'Stays',
      destinations: 'Destinations',
      about: 'About',
      contact: 'Contact',
      listProperty: 'List your place',
    },
    hero: {
      badge: 'Over 1,200 verified properties',
      title: 'Rentals by the Black Sea',
      subtitle:
        'Apartments, villas and cozy homes in the finest corners of Crimea. Book directly, with no extra fees.',
      location: 'Where',
      locationPlaceholder: 'Yalta, Sevastopol, Feodosia…',
      checkin: 'Check in',
      checkout: 'Check out',
      guests: 'Guests',
      guestsValue: '2 guests',
      search: 'Search stays',
    },
    destinations: {
      title: 'Popular destinations',
      subtitle: 'The most loved spots along the Crimean coast',
      properties: 'properties',
    },
    listings: {
      title: 'Featured stays',
      subtitle: 'Handpicked for your perfect getaway',
      viewAll: 'View all',
      night: 'night',
      book: 'Book now',
      guests: 'guests',
      beds: 'beds',
      baths: 'baths',
    },
    filters: {
      all: 'All',
      apartment: 'Apartments',
      villa: 'Villas',
      house: 'Houses',
      studio: 'Studios',
    },
    features: {
      title: 'Why choose Krym Rental',
      items: [
        {
          title: 'Verified properties',
          text: 'Every stay is personally inspected by our team before it goes live.',
        },
        {
          title: 'No hidden fees',
          text: 'Fair prices and direct booking with the property owners.',
        },
        {
          title: '24/7 support',
          text: 'Our team is available anytime throughout your trip.',
        },
      ],
    },
    cta: {
      title: 'Own a place in Crimea?',
      subtitle: 'List your property and start welcoming guests today.',
      button: 'Become a host',
    },
    footer: {
      tagline: 'Seaside rentals across Crimea.',
      explore: 'Explore',
      support: 'Support',
      help: 'Help center',
      faq: 'FAQ',
      terms: 'Terms',
      privacy: 'Privacy',
      rights: 'All rights reserved.',
    },
    rating: 'rating',
  },
} as const

export type Dict = (typeof dictionary)['ru']
