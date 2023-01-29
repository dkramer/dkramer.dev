export enum PictureTypes {
  macro = 'macro',
  paintings = 'paintings',
  wildlife = 'wildlife'
}

export const pictureLinks = [

  {
    name: 'Random',
    href: 'random',
    color: '#FF9E3D'
  },
  {
    name: 'Macro',
    href: 'macro',
    color: '#65B2FF'
  },
  {
    name: 'Paintings',
    href: 'paintings',
    color: '#65B2FF'
  },
  {
    name: 'Wildlife',
    href: 'wildlife',
    color: '#65B2FF'
  }
]
export interface picture {
  url: string
  type: PictureTypes
}
export const pictures: picture[] = [
  {
    url: '1.jpg',
    type: PictureTypes.macro
  },
  {
    url: '2.jpg',
    type: PictureTypes.macro
  },
  {
    url: '3.jpg',
    type: PictureTypes.macro
  },
  {
    url: '4.jpg',
    type: PictureTypes.macro
  },
  {
    url: '5.jpg',
    type: PictureTypes.macro
  },
  {
    url: '6.jpg',
    type: PictureTypes.macro
  },
  {
    url: '7.jpg',
    type: PictureTypes.macro
  },
  {
    url: '1.jpg',
    type: PictureTypes.paintings
  },
  {
    url: '2.jpg',
    type: PictureTypes.paintings
  },
  {
    url: '3.jpg',
    type: PictureTypes.paintings
  },
  {
    url: '4.jpg',
    type: PictureTypes.paintings
  },
  {
    url: '5.jpg',
    type: PictureTypes.paintings
  },
  {
    url: '6.jpg',
    type: PictureTypes.paintings
  },

  {
    url: '1.jpg',
    type: PictureTypes.wildlife
  },
  {
    url: '2.jpg',
    type: PictureTypes.wildlife
  },
  {
    url: '3.jpg',
    type: PictureTypes.wildlife
  },
  {
    url: '4.jpg',
    type: PictureTypes.wildlife
  },
  {
    url: '5.jpg',
    type: PictureTypes.wildlife
  },
  {
    url: '6.jpg',
    type: PictureTypes.wildlife
  },
  {
    url: '7.jpg',
    type: PictureTypes.wildlife
  },
  {
    url: '8.jpg',
    type: PictureTypes.wildlife
  },
  {
    url: '9.jpg',
    type: PictureTypes.wildlife
  },
  {
    url: '10.jpg',
    type: PictureTypes.wildlife
  }
]
