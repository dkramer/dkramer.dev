export const images: string[] = ['meSmall.jpg', 'meSmall.jpg', 'meSmall.jpg', 'meSmall.jpg']

const imageByIndex = (index: number): string => images[index % images.length]

export default imageByIndex

/*



.embla {
  --slide-spacing: 1rem;
  --slide-size: 100%;
  --slide-height: 19rem;
  padding: 1.6rem;
}
.embla__viewport {
  overflow: hidden;
}
.embla__container {
  display: flex;
  flex-direction: row;
  height: auto;
  margin-left: calc(var(--slide-spacing) * -1);
}
.embla__slide {
  flex: 0 0 var(--slide-size);
  min-width: 0;
  padding-left: var(--slide-spacing);
  position: relative;
}
.embla__slide__img {
  display: block;
  height: var(--slide-height);
  width: 100%;
  object-fit: cover;
}
.embla__slide__number {
  width: 4.6rem;
  height: 4.6rem;
  z-index: 1;
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;
  border-radius: 50%;
  background-color: rgba(var(--background-site-rgb-value), 0.85);
  line-height: 4.6rem;
  font-weight: 900;
  text-align: center;
  pointer-events: none;
}
.embla__slide__number > span {
  color: var(--brand-primary);
  background-image: linear-gradient(
    45deg,
    var(--brand-primary),
    var(--brand-secondary)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.6rem;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.embla__dot,
.embla__button {
  -webkit-appearance: none;
  background-color: transparent;
  touch-action: manipulation;
  display: inline-flex;
  text-decoration: none;
  cursor: pointer;
  border: 0;
  padding: 0;
  margin: 0;
}
.embla__dots {
  z-index: 1;
  bottom: 1.2rem;
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.embla__dot {
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  margin-right: 0.75rem;
  margin-left: 0.75rem;
}
.embla__dot:after {
  background: var(--background-site);
  border-radius: 0.2rem;
  width: 100%;
  height: 0.3rem;
  content: '';
}
.embla__dot--selected:after {
  background: linear-gradient(
    45deg,
    var(--brand-primary),
    var(--brand-secondary)
  );
}
.embla__button {
  z-index: 1;
  color: var(--background-site);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  width: 4rem;
  height: 4rem;
}
.embla__button--prev {
  left: 1.6rem;
}
.embla__button--next {
  right: 1.6rem;
}
.embla__button:disabled {
  opacity: 0.3;
}
.embla__button__svg {
  width: 65%;
  height: 65%;
}


 */
