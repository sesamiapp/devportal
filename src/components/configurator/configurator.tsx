import React, { useEffect, useState } from 'react'
import { experienceLanguageOptions, timezones } from '../../data'
import './configurator.css'

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'sesami-experience': any
        }
    }
}

export const Configurator = () => {

    const [ shopId              , setShopId              ] = useState<string | null>('76573311249')
    const [ productId           , setProductId           ] = useState<string | null>('8689310236945')
    const [ variantId           , setVariantId           ] = useState<string | null>(null)
    const [ quantity            , setQuantity            ] = useState<number | null>(null)

    const [ locale              , setLocale              ] = useState<string | null>(null)
    const [ timezone            , setTimezone            ] = useState<string | null>(null)
    
    const [ experienceVersion   , setExperienceVersion   ] = useState<'classic'  | 'v2' | null>(null)
    const [ calendarType        , setCalendarType        ] = useState<'timeline' | 'slot' | null>(null)
    const [ skipMonthlyCalendar , setSkipMonthlyCalendar ] = useState<boolean | null>(null)
    const [ hideAnyAvailable    , setHideAnyAvailable    ] = useState<boolean | null>(null)
    
    const [ autoAddToCart       , setAutoAddToCart       ] = useState<boolean | null>(null)
    const [ skipCart            , setSkipCart            ] = useState<boolean | null>(null)

    const [ label               , setLabel               ] = useState<string | null>(null)
    const [ width               , setWidth               ] = useState<number | null>(300)
    const [ height              , setHeight              ] = useState<number | null>(50)
    const [ fontSize            , setFontSize            ] = useState<number | null>(18)
    const [ color               , setColor               ] = useState<string | null>('#FFF')
    const [ backgroundColor     , setBackgroundColor     ] = useState<string | null>('#14146d')
    const [ borderWidth         , setBorderWidth         ] = useState<number | null>(1)
    const [ borderColor         , setBorderColor         ] = useState<string | null>('#0f0f30')
    const [ borderRadius        , setBorderRadius        ] = useState<number | null>(12)
    const [ alignment           , setAlignment           ] = useState<'flex-start' | 'center' | 'flex-end' | null>('flex-start')

    const [ ctaBackgroundColor  , setCtaBackgroundColor  ] = useState<string | null>(null)
    const [ ctaTextColor        , setCtaTextColor        ] = useState<string | null>(null)

    const [ showButton, setShowButton ] = useState(true)

    // rerender the button on prop change:
    useEffect(() => { setShowButton(false) }, [
        
        shopId,
        productId,
        variantId,
        quantity,

        locale,
        timezone,

        experienceVersion,
        calendarType,
        skipMonthlyCalendar,
        hideAnyAvailable,

        autoAddToCart,
        skipCart,

        label,
        width,
        height,
        color,
        backgroundColor,
        fontSize,
        borderWidth,
        borderColor,
        borderRadius,
        alignment,

        ctaBackgroundColor,
        ctaTextColor

    ])
    useEffect(() => { !showButton && setShowButton(true) }, [showButton])

    const sesamiExperienceProps = {

        ...(shopId      && { 'shop-id'   : shopId    }),
        ...(productId   && { 'product-id': productId }),
        ...(variantId   && { 'variant-id': variantId }),
        ...(quantity    && { 'quantity'  : quantity  }),

        ...(locale      && { 'locale'    : locale    }),
        ...(timezone    && { 'timezone'  : timezone  }),
        
        ...(experienceVersion   && { 'experience-version': experienceVersion }),
        ...(calendarType        && { 'calendar-type': calendarType }),
        ...(skipMonthlyCalendar !== null && { 'skip-monthly-calendar': skipMonthlyCalendar ? '' : 'false' }),
        ...(hideAnyAvailable    !== null && { 'hide-any-available': hideAnyAvailable ? '' : 'false' }),

        ...(autoAddToCart === true && { 'auto-add-to-cart': '' }),
        ...(skipCart      === true && { 'skip-cart': ''        }),

        ...(label !== null && { 'button-label': label }),

        'button-customized-settings': encodeURIComponent(JSON.stringify({
            width:            width           !== null ? `${width}px`  : undefined,
            height:           height          !== null ? `${height}px` : undefined,
            font_size:        fontSize        !== null ? fontSize      : undefined,
            color:            color           ?? undefined,
            color_background: backgroundColor ?? undefined,
            border_width:     borderWidth     !== null ? borderWidth   : undefined,
            border_color:     borderColor     ?? undefined,
            border_radius:    borderRadius    !== null ? borderRadius  : undefined,
            alignment
        })),

        ...(ctaBackgroundColor && { 'cta-background-color': ctaBackgroundColor }),
        ...(ctaTextColor       && { 'cta-text-color'      : ctaTextColor       })

    }
    
    return (
        <div className="contentWrapper">
            
            <div className="inputsWrapper">

                <div className="leftColumn">

                    <div className="fieldWrapper">
                        <a>Shop ID</a>
                        <input defaultValue={shopId ?? ''} onChange={e => setShopId(e.target.value)}/>
                        <p className='description'>This field is required.</p>
                    </div>

                    <div className="fieldWrapper">
                        <a>Product ID</a>
                        <input defaultValue={productId ?? ''} onChange={e => setProductId(e.target.value === '' ? null : e.target.value)}/>
                        <p className='description'>This field is required.</p>
                    </div>
                    
                    <div className="fieldWrapper">
                        <a>Variant ID</a>
                        <input defaultValue={variantId ?? ''} onChange={e => setVariantId(e.target.value === '' ? null : e.target.value)}/>
                        <p className='description'>Leave it empty to pick the first variant.</p>
                    </div>

                    <div className="fieldWrapper">
                        <a>Quantity</a>
                        <input type="number" min={1} defaultValue={quantity ?? undefined} onChange={e => setQuantity(e.target.value ? parseInt(e.target.value) : null)}/>
                        <p className='description'>If you leave it empty it would be one.</p>
                    </div>

                    <div className="fieldWrapper">
                        <a>Locale</a>
                        <select
                            defaultValue={locale ?? 'ns'}
                            onChange={e => setLocale(e.target.value === 'ns' ? null : e.target.value)}
                        >
                            <option value={'ns'}>Not Specified</option>
                            {experienceLanguageOptions.map(option => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                        <p className='description'>If not specified, it will be picked from the settings.</p>
                    </div>

                    <div className="fieldWrapper">
                        <a>Timezone</a>
                        <select
                            defaultValue={timezone ?? 'auto'}
                            onChange={e => setTimezone(e.target.value === 'auto' ? null : e.target.value)}
                        >
                            <option key={'auto'} value={''}>Auto</option>
                            {timezones.map(option => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                        <p className='description'>On auto, it will be picked the user's timezone.</p>
                    </div>

                    <div className="fieldWrapper">
                        <a>Experience</a>
                        <select
                            defaultValue={experienceVersion ?? undefined}
                            onChange={e => setExperienceVersion(
                                e.target.value === 'classic' ? 'classic' :
                                e.target.value === 'v2' ? 'v2' :
                                null
                            )}
                        >
                            <option value={'ns'}>Not Specified</option>
                            <option value={'classic'}>Classic</option>
                            <option value={'v2'}>V2</option>
                        </select>
                        <p className='description'>The default will be V2.</p>
                    </div>

                    <div className="fieldWrapper">
                        <a>Calendar</a>
                        <select
                            defaultValue={calendarType ?? undefined}
                            onChange={e => setCalendarType(
                                e.target.value === 'timeline' ? 'timeline' :
                                e.target.value === 'slot' ? 'slot' :
                                null
                            )}
                        >
                            <option value={'ns'}>Not Specified</option>
                            <option value={'timeline'}>Classic</option>
                            <option value={'slot'}>V2</option>
                        </select>
                        <p className='description'>If not specified, it will be picked from shop settings.</p>
                    </div>

                    <div className="fieldWrapper">
                        <a>Skip Monthly Calendar</a>
                        <select
                            defaultValue={skipMonthlyCalendar === null ? 'auto' : skipMonthlyCalendar === true ? 'true' : 'false'}
                            onChange={e => setSkipMonthlyCalendar(e.target.value === 'auto' ? null : e.target.value === 'true')}
                        >
                            <option value={'auto'}>Auto</option>
                            <option value={'true'}>Skip</option>
                            <option value={'false'}>Do Not Skip</option>
                        </select>
                        <p className='description'>On auto, it will be based on the calendar type.</p>
                    </div>

                    <div className="fieldWrapper">
                        <a>Hide any available</a>
                        <select
                            defaultValue={hideAnyAvailable === null ? 'auto' : hideAnyAvailable === true ? 'true' : 'false'}
                            onChange={e => setHideAnyAvailable(e.target.value === 'auto' ? null : e.target.value === 'true')}
                        >
                            <option value={'auto'}>Auto</option>
                            <option value={'true'}>Hide</option>
                            <option value={'false'}>Do Not Hide</option>
                        </select>
                        <p className='description'>On auto, it will be based on the configuration.</p>
                    </div>
                    
                    <div className="fieldWrapper">
                        <a>Button Label</a>
                        <input defaultValue={label ?? ''} onChange={e => setLabel(e.target.value === '' ? null : e.target.value)}/>
                        <p className='description'>The text on the button.</p>
                    </div>

                    <div className="checkboxWrapper">
                        <label>
                            <div className='checkbox'>
                                <input type="checkbox" checked={autoAddToCart === true} onChange={e => setAutoAddToCart(e.target.checked)}/>
                                <a>Auto Add To Cart</a>
                            </div>
                        </label>
                        <p className='description'>It will add the selected information to the cart.</p>
                    </div>

                    <div className="checkboxWrapper">
                        <label>
                            <div className='checkbox'>
                                <input type="checkbox" checked={skipCart === true} onChange={e => setSkipCart(e.target.checked)}/>
                                <a>Skip Cart</a>
                            </div>
                        </label>
                        <p className='description'>It will go to the checkout after user selects time.</p>
                    </div>

                </div>

                <div className="rightColumn">
                    
                    <div className="fieldWrapper">
                        <a>Button Width(px)</a>
                        <input type="number" min={0} defaultValue={width ?? undefined} onChange={e => setWidth(e.target.value ? parseInt(e.target.value) : null)}/>
                        <p className='description'>The button's width.</p>
                    </div>
                    
                    <div className="fieldWrapper">
                        <a>Button Height(px)</a>
                        <input type="number" min={0} defaultValue={height ?? undefined} onChange={e => setHeight(e.target.value ? parseInt(e.target.value) : null)}/>
                        <p className='description'>The button's height.</p>
                    </div>
                        
                    <div className="fieldWrapper">
                        <a>Button Text Font Size(px)</a>
                        <input type="number" min={0} defaultValue={fontSize ?? undefined} onChange={e => setFontSize(e.target.value ? parseInt(e.target.value) : null)}/>
                        <p className='description'>The button's text font size.</p>
                    </div>
                    
                    <div className="fieldWrapper">
                        <a>Button Text Color</a>
                        <input defaultValue={color ?? ''} onChange={e => setColor(e.target.value === '' ? null : e.target.value)}/>
                        <p className='description'>The button's text color.</p>
                    </div>
                    
                    <div className="fieldWrapper">
                        <a>Button Background Color</a>
                        <input defaultValue={backgroundColor ?? ''} onChange={e => setBackgroundColor(e.target.value === '' ? null : e.target.value)}/>
                        <p className='description'>The button's background color.</p>
                    </div>
                        
                    <div className="fieldWrapper">
                        <a>Button Border Width(px)</a>
                        <input type="number" min={0} defaultValue={borderWidth ?? undefined} onChange={e => setBorderWidth(e.target.value ? parseInt(e.target.value) : null)}/>
                        <p className='description'>The button's border width.</p>
                    </div>
                    
                    <div className="fieldWrapper">
                        <a>Button Border Color</a>
                        <input defaultValue={borderColor ?? ''} onChange={e => setBorderColor(e.target.value === '' ? null : e.target.value)}/>
                        <p className='description'>The button's border color.</p>
                    </div>

                    <div className="fieldWrapper">
                        <a>Button Border Radius(px)</a>
                        <input type="number" min={0} defaultValue={borderRadius ?? undefined} onChange={e => setBorderRadius(e.target.value ? parseInt(e.target.value) : null)}/>
                        <p className='description'>The button's border radius.</p>
                    </div>
                    
                    <div className="fieldWrapper">
                        <a>Button Border Color</a>
                        <input defaultValue={borderColor ?? ''} onChange={e => setBorderColor(e.target.value === '' ? null : e.target.value)}/>
                        <p className='description'>The button's border color.</p>
                    </div>

                    <div className="fieldWrapper">
                        <a>Button Alignment</a>
                        <select
                            defaultValue={alignment === null ? 'none' : (hideAnyAvailable as any)}
                            onChange={e => setAlignment(e.target.value as 'flex-start' | 'center' | 'flex-end')}
                        >
                            <option value={'flex-start'}>Left</option>
                            <option value={'center'}>Center</option>
                            <option value={'flex-end'}>Right</option>
                            <option value={'none'}>None</option>
                        </select>
                        <p className='description'>The alignment of the button.</p>
                    </div>
                    
                    <div className="fieldWrapper">
                        <a>CTA Background Color</a>
                        <input defaultValue={ctaBackgroundColor ?? ''} onChange={e => setCtaBackgroundColor(e.target.value === '' ? null : e.target.value)}/>
                        <p className='description'>Background color for the action buttons inside the Experience.</p>
                    </div>
                    
                    <div className="fieldWrapper">
                        <a>CTA Text Color</a>
                        <input defaultValue={ctaTextColor ?? ''} onChange={e => setCtaTextColor(e.target.value === '' ? null : e.target.value)}/>
                        <p className='description'>Text color for the action buttons inside the Experience.</p>
                    </div>

                </div>

            </div>
            
            {/* code sample */}
            <textarea
                className="codeSampleTextarea"
                wrap="off"
                rows={16}
                value={
                    `${`<sesami-experience`}${(JSON.stringify(sesamiExperienceProps, null, 4))
                    .replace('{', '')
                    .replace('}', '')
                    .replace(new RegExp(': ' , 'g'), '=')
                    .replace(new RegExp(' "' , 'g'), ' ')
                    .replace(new RegExp('"=' , 'g'), '=')
                    .replace(new RegExp(','  , 'g'), '' )
                    .replace(new RegExp('=""', 'g'), '' )
                    }${`>`}${`</sesami-experience>`}`
                }
            ></textarea>

            {/* button */}
            {showButton && <sesami-experience {...sesamiExperienceProps} ></sesami-experience>}

        </div>
    )
}
