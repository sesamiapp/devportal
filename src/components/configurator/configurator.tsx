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

    const [ shopId              , setShopId              ] = useState<string>('76573311249')
    const [ productId           , setProductId           ] = useState<string | null>('8689310236945')
    const [ variantId           , setVariantId           ] = useState<string | null>(null)
    const [ quantity            , setQuantity            ] = useState<string>('1')
    const [ timezone            , setTimezone            ] = useState('')
    const [ locale              , setLocale              ] = useState<string | null>('en')
    const [ experience          , setExperience          ] = useState<'auto' | 'classic' | 'v2'>('auto')
    const [ skipMonthlyCalendar , setSkipMonthlyCalendar ] = useState<boolean | null>(null)
    const [ autoAddToCart       , setAutoAddToCart       ] = useState(false)
    const [ skipCart            , setSkipCart            ] = useState(false)
    const [ hideAnyAvailable    , setHideAnyAvailable    ] = useState(false)

    const [ label               , setLabel               ] = useState<string | null>(null)
    const [ width               , setWidth               ] = useState(300)
    const [ height              , setHeight              ] = useState(50)
    const [ color               , setColor               ] = useState('#FFF')
    const [ backgroundColor     , setBackgroundColor     ] = useState('#14146d')
    const [ fontSize            , setFontSize            ] = useState(18)
    const [ borderWidth         , setBorderWidth         ] = useState(1)
    const [ borderColor         , setBorderColor         ] = useState('#0f0f30')
    const [ borderRadius        , setBorderRadius        ] = useState(12)
    const [ alignment           , setAlignment           ] = useState<'flex-start' | 'center' | 'flex-end'>('flex-start')

    const [ showButton, setShowButton ] = useState(true)

    useEffect(() => { setShowButton(false) }, [
        experience,
        label,
        width,
        height,
        color,
        backgroundColor,
        fontSize,
        borderWidth,
        borderRadius,
        borderColor,
        alignment
    ])
    useEffect(() => { !showButton && setShowButton(true) }, [showButton])

    const sesamiExperienceProps = {
                
        'shop-id': shopId,
        ...(productId !== null && { "product-id": productId }),
        ...(variantId !== null && { "variant-id": variantId }),
        ...(quantity !== '0' && { "quantity": quantity }),
        ...(timezone !== '' && { "timezone": timezone }),
        ...(locale !== null && { "locale": locale }),
        ...(experience !== 'auto' && { "experience": experience }),
        ...(skipMonthlyCalendar !== null && { "skip-monthly-calendar": skipMonthlyCalendar }),
        ...(autoAddToCart === true && { "auto-add-to-cart": '' }),
        ...(skipCart === true && { "skip-cart": '' }),
        ...(hideAnyAvailable === true && { "hide-any-available": '' }),

        ...(label !== null && { "button-label": label }),
        'button-customized-settings': encodeURIComponent(JSON.stringify({
            'width': `${width}px`,
            'height': `${height}px`, 
            'color': color,
            'color_background': backgroundColor,
            'font_size': fontSize,
            'border_width': borderWidth,
            'border_radius': borderRadius,
            'border_color': borderColor,
            'alignment': alignment
        }))

    }
    
    return (
        <div className="contentWrapper">
            
            <div className="inputsWrapper">

                <div className="leftColumn">

                    <div className="inputContainer">
                        <a>Shop ID:</a>
                        <input defaultValue={shopId} onChange={e => setShopId(e.target.value)}/>
                    </div>

                    <div className="inputContainer">
                        <a>Product ID:</a>
                        <input defaultValue={productId === null ? '' : productId} onChange={e => setProductId(e.target.value === '' ? null : e.target.value)}/>
                    </div>
                    
                    <div className="inputContainer">
                        <a>Variant ID:</a>
                        <input defaultValue={variantId === null ? '' : variantId} onChange={e => setVariantId(e.target.value === '' ? null : e.target.value)}/>
                    </div>

                    <div className="inputContainer">
                        <a>Quantity:</a>
                        <input type="number" min={0} defaultValue={quantity} onChange={e => setQuantity(e.target.value)}/>
                    </div>

                    <div className="inputContainer">
                        <a>Timezone:</a>
                        <select
                            defaultValue={timezone}
                            onChange={e => setTimezone(e.target.value)}
                        >
                            <option key={''} value={''}>Auto</option>
                            {timezones.map(option => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>

                    <div className="inputContainer">
                        <a>Locale:</a>
                        <select
                            defaultValue={locale === null ? 'none' : locale}
                            onChange={e => setLocale(e.target.value === 'none' ? null : e.target.value)}
                        >
                            <option value={'none'}>Do not specify</option>
                            {experienceLanguageOptions.map(option => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>

                    <div className="inputContainer">
                        <a>Experience:</a>
                        <select
                            defaultValue={experience}
                            onChange={e => setExperience(e.target.value as any)}
                        >
                            <option value={'auto'}>Auto(Based on Config)</option>
                            <option value={'classic'}>Classic</option>
                            <option value={'v2'}>V2</option>
                        </select>
                    </div>

                    <div className="inputContainer">
                        <a>Skip Monthly Calendar:</a>
                        <select
                            defaultValue={skipMonthlyCalendar === null ? 'none' : skipMonthlyCalendar === true ? 'true' : 'false'}
                            onChange={e => setSkipMonthlyCalendar(e.target.value === 'none' ? null : e.target.value === 'true')}
                        >
                            <option value={'true'}>Skip</option>
                            <option value={'false'}>Do Not Skip</option>
                            <option value={'none'}>Auto(Based on Experience)</option>
                        </select>
                    </div>

                    <div className="checkboxWrapper">
                        <input type="checkbox" checked={autoAddToCart} onChange={e => setAutoAddToCart(e.target.checked)}/>
                        <a>Auto Add To Cart</a>
                    </div>

                    <div className="checkboxWrapper">
                        <input type="checkbox" checked={skipCart} onChange={e => setSkipCart(e.target.checked)}/>
                        <a>Skip Cart</a>
                    </div>

                    <div className="checkboxWrapper">
                        <input type="checkbox" checked={hideAnyAvailable} onChange={e => setHideAnyAvailable(e.target.checked)}/>
                        <a>Hide Any Available</a>
                    </div>

                </div>

                <div className="rightColumn">
                    
                    <div className="inputContainer">
                        <a>Label:</a>
                        <input defaultValue={label === null ? '' : label} onChange={e => setLabel(e.target.value === '' ? null : e.target.value)}/>
                    </div>

                    <div className="widthHeightWrapper">

                        <div className="inputContainer">
                            <a>Width(px):</a>
                            <input type="number" min={0} defaultValue={width} onChange={e => setWidth(e.target.valueAsNumber)}/>
                        </div>

                        <div className="inputContainer">
                            <a>Height(px):</a>
                            <input type="number" min={0} defaultValue={height} onChange={e => setHeight(e.target.valueAsNumber)}/>
                        </div>

                    </div>
                    
                    <div className="inputContainer">
                        <a>Color:</a>
                        <input defaultValue={color} onChange={e => setColor(e.target.value)}/>
                    </div>
                    
                    <div className="inputContainer">
                        <a>Background Color:</a>
                        <input defaultValue={backgroundColor} onChange={e => setBackgroundColor(e.target.value)}/>
                    </div>

                    <div className="inputContainer">
                        <a>Font Size(px):</a>
                        <input type="number" min={0} defaultValue={fontSize} onChange={e => setFontSize(e.target.valueAsNumber)}/>
                    </div>
                    
                    <div className="inputContainer">
                        <a>Border Width(px):</a>
                        <input type="number" min={0} defaultValue={borderWidth} onChange={e => setBorderWidth(e.target.valueAsNumber)}/>
                    </div>
                    
                    <div className="inputContainer">
                        <a>Border Radius(px):</a>
                        <input defaultValue={borderRadius} min={0} onChange={e => setBorderRadius(e.target.valueAsNumber)}/>
                    </div>
                    
                    <div className="inputContainer">
                        <a>Border Color:</a>
                        <input defaultValue={borderColor} onChange={e => setBorderColor(e.target.value)}/>
                    </div>

                    <div className="inputContainer">
                        <a>Alignment:</a>
                        <select
                            defaultValue={alignment}
                            onChange={e => setAlignment(e.target.value as 'flex-start' | 'center' | 'flex-end')}
                        >
                            <option value={'flex-start'}>Left</option>
                            <option value={'center'}>Center</option>
                            <option value={'flex-end'}>Right</option>
                        </select>
                    </div>

                </div>

            </div>
            
            {/* code sample */}
            <textarea className="codeSampleTextarea" wrap="off" rows={14} value={`${`<sesami-experience`}${(
                        JSON.stringify(sesamiExperienceProps, null, 4)
                    )
                    .replace('{', '')
                    .replace('}', '')
                    .replace(new RegExp(': ' , 'g'), '=')
                    .replace(new RegExp(' "' , 'g'), ' ')
                    .replace(new RegExp('"=' , 'g'), '=')
                    .replace(new RegExp(','  , 'g'), '' )
                    .replace(new RegExp('=""', 'g'), '' )
                    }${`>`}${`</sesami-experience>`}`}>
            </textarea>

            {/* button */}
            {showButton && <sesami-experience {...sesamiExperienceProps} ></sesami-experience>}

        </div>
    )
}
