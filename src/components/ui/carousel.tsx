'use client'

import * as React from 'react'
import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { cn } from '@/utilities/ui'
import { Button } from '@/components/ui/button'

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type DirectionOption = 'ltr' | 'rtl' | undefined

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: 'horizontal' | 'vertical'
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  thumbsRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
  activeIndex: number
  onThumbClick: (index: number) => void
  direction: DirectionOption
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />')
  }

  return context
}

function Carousel({
  orientation = 'horizontal',
  opts,
  setApi,
  plugins,
  className,
  children,
  dir,
  ...props
}: React.ComponentProps<'div'> & CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === 'horizontal' ? 'x' : 'y',
    },
    plugins,
  )

  const direction = dir as DirectionOption

  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel(
    {
      ...props,
      axis: orientation === 'vertical' ? 'y' : 'x',
      direction: dir as DirectionOption,
      containScroll: 'keepSnaps',
      dragFree: true,
    },
    plugins,
  )
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)
  const [activeIndex, setActiveIndex] = React.useState<number>(0)

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
    setActiveIndex(api.selectedScrollSnap)
  }, [])

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = React.useCallback(() => {
    api?.scrollNext()
  }, [api])

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        scrollPrev()
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        scrollNext()
      }
    },
    [scrollPrev, scrollNext],
  )

  React.useEffect(() => {
    if (!api || !setApi) return
    setApi(api)
  }, [api, setApi])

  React.useEffect(() => {
    if (!api) return
    onSelect(api)
    api.on('reInit', onSelect)
    api.on('select', onSelect)

    return () => {
      api?.off('select', onSelect)
    }
  }, [api, onSelect])

  const onThumbClick = React.useCallback(
    (index: number) => {
      if (!api || !emblaThumbsApi) return
      api.scrollTo(index)
    },
    [api, emblaThumbsApi],
  )

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation: orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
        activeIndex,
        onThumbClick,
        direction,
        thumbsRef: emblaThumbsRef,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={cn('relative', className)}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

function CarouselContent({ className, ...props }: React.ComponentProps<'div'>) {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carouselRef} className="overflow-hidden" data-slot="carousel-content">
      <div
        className={cn('flex', orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col', className)}
        {...props}
      />
    </div>
  )
}

export const CarouselThumbsContainer = React.forwardRef<
  HTMLDivElement,
  {} & React.HTMLAttributes<HTMLDivElement>
>(({ className, dir, children, ...props }, ref) => {
  const { thumbsRef, orientation, direction } = useCarousel()

  return (
    <div {...props} ref={thumbsRef} className="overflow-hidden" dir={direction}>
      <div
        ref={ref}
        className={cn('flex', `${orientation === 'vertical' ? 'flex-col' : ''}`, className)}
      >
        {children}
      </div>
    </div>
  )
})

CarouselThumbsContainer.displayName = 'CarouselThumbsContainer'

function CarouselItem({ className, ...props }: React.ComponentProps<'div'>) {
  const { orientation } = useCarousel()

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        'min-w-0 shrink-0 grow-0 basis-full',
        orientation === 'horizontal' ? 'pl-4' : 'pt-4',
        className,
      )}
      {...props}
    />
  )
}

export const SliderThumbItem = React.forwardRef<
  HTMLDivElement,
  {
    index: number
  } & React.HTMLAttributes<HTMLDivElement>
>(({ className, index, children, ...props }, ref) => {
  const { activeIndex, onThumbClick, orientation } = useCarousel()
  const isSlideActive = activeIndex === index
  return (
    <div
      {...props}
      ref={ref}
      onClick={() => onThumbClick(index)}
      className={cn(
        'flex min-w-0 shrink-0 grow-0 basis-1/3 bg-background p-1',
        `${orientation === 'vertical' ? 'pb-1' : 'pr-1'}`,
        className,
      )}
    >
      <div
        className={`relative aspect-square h-20 w-full opacity-50 rounded-md transition-opacity ${
          isSlideActive ? '!opacity-100' : ''
        }`}
      >
        {children}
      </div>
    </div>
  )
})

SliderThumbItem.displayName = 'SliderThumbItem'

function CarouselPrevious({
  className,
  variant = 'outline',
  size = 'icon',
  iconClassname,
  ...props
}: React.ComponentProps<typeof Button> & { iconClassname?: string }) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      data-slot="carousel-previous"
      variant={variant}
      size={size}
      className={cn(
        'absolute size-7 rounded-full text-blue-purple-500 hover:text-blue-600',
        orientation === 'horizontal'
          ? 'top-1/2 -left-12 -translate-y-1/2'
          : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
        className,
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className={iconClassname} />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
}

function CarouselNext({
  className,
  variant = 'outline',
  size = 'icon',
  iconClassname,
  ...props
}: React.ComponentProps<typeof Button> & { iconClassname?: string }) {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      data-slot="carousel-next"
      variant={variant}
      size={size}
      className={cn(
        'absolute size-7 rounded-full text-blue-purple-500 hover:text-blue-600',
        orientation === 'horizontal'
          ? 'top-1/2 -right-12 -translate-y-1/2'
          : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
        className,
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className={iconClassname} />
      <span className="sr-only">Next slide</span>
    </Button>
  )
}

export const CarouselIndicator = React.forwardRef<
  HTMLButtonElement,
  { index: number } & React.ComponentProps<typeof Button>
>(({ className, index, children, ...props }, ref) => {
  const { activeIndex, onThumbClick } = useCarousel()
  const isSlideActive = activeIndex === index
  return (
    <Button
      ref={ref}
      size="icon"
      className={cn(
        'h-1 w-6 rounded-full',
        "data-[active='false']:bg-white data-[active='true']:bg-blue-700",
        className,
      )}
      data-active={isSlideActive}
      onClick={() => onThumbClick(index)}
      {...props}
    >
      <span className="sr-only">slide {index + 1} </span>
    </Button>
  )
})

CarouselIndicator.displayName = 'CarouselIndicator'

export { type CarouselApi, Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext }
