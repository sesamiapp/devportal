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

    const [ shopId              , setShopId              ] = useState<string>('71162396982')
    const [ productId           , setProductId           ] = useState<string>('8087098196278')
    const [ variantId           , setVariantId           ] = useState<string | null>('44316082864438')
    const [ quantity            , setQuantity            ] = useState<string>('1')
    const [ timezone            , setTimezone            ] = useState('America/Los_Angeles')
    const [ locale              , setLocale              ] = useState<string | null>('en')

    const [ skipMonthlyCalendar , setSkipMonthlyCalendar ] = useState<boolean | null>(null)
    const [ autoAddToCart       , setAutoAddToCart       ] = useState(true)
    const [ skipCart            , setSkipCart            ] = useState(false)
    const [ hideAnyAvailable    , setHideAnyAvailable    ] = useState(false)

    const [ label               , setLabel               ] = useState('Select Time')
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
        'product-id': productId,
        ...(variantId !== null && { "variant-id": variantId }),
        ...(quantity !== '0' && { "quantity": quantity }),
        'timezone': timezone,
        ...(locale !== null && { "locale": locale }),

        ...(skipMonthlyCalendar !== null && { "skip-monthly-calendar": skipMonthlyCalendar }),
        ...(autoAddToCart === true && { "auto-add-to-cart": '' }),
        ...(skipCart === true && { "skip-cart": '' }),
        ...(hideAnyAvailable === true && { "hide-any-available": '' }),

        'button-label': label,
        'button-customized-settings': encodeURIComponent(JSON.stringify({
            'width': `${width}px`, //todo
            'height': `${height}px`, //todo
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
            
            <div className='inputsWrapper'>

                <div className='leftColumn'>

                    <div className='inputContainer'>
                        <a>Shop ID:</a>
                        <input defaultValue={shopId} onChange={e => setShopId(e.target.value)}/>
                    </div>

                    <div className='inputContainer'>
                        <a>Product ID:</a>
                        <input defaultValue={productId} onChange={e => setProductId(e.target.value)}/>
                    </div>
                    
                    <div className='inputContainer'>
                        <a>Variant ID:</a>
                        <input defaultValue={variantId === null ? '' : variantId} onChange={e => setVariantId(e.target.value === '' ? null : e.target.value)}/>
                    </div>

                    <div className='inputContainer'>
                        <a>Quantity:</a>
                        <input type="number" defaultValue={quantity} onChange={e => setQuantity(e.target.value)}/>
                    </div>

                    <div className='inputContainer'>
                        <a>Timezone:</a>
                        <select
                            defaultValue={timezone}
                            onChange={e => setTimezone(e.target.value)}
                        >
                            {timezones.map(option => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>

                    <div className='inputContainer'>
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

                    <div className='inputContainer'>
                        <a>Skip Monthly Calendar:</a>
                        <select
                            defaultValue={skipMonthlyCalendar === null ? 'none' : skipMonthlyCalendar === true ? 'true' : 'false'}
                            onChange={e => setSkipMonthlyCalendar(e.target.value === 'none' ? null : e.target.value === 'true')}
                        >
                            <option value={'true'}>Skip</option>
                            <option value={'false'}>Do Not Skip</option>
                            <option value={'none'}>Auto</option>
                        </select>
                    </div>

                    <div className='checkboxWrapper'>
                        <input type="checkbox" checked={autoAddToCart} onChange={e => setAutoAddToCart(e.target.checked)}/>
                        <a>Auto Add To Cart</a>
                    </div>

                    <div className='checkboxWrapper'>
                        <input type="checkbox" checked={skipCart} onChange={e => setSkipCart(e.target.checked)}/>
                        <a>Skip Cart</a>
                    </div>

                    <div className='checkboxWrapper'>
                        <input type="checkbox" checked={hideAnyAvailable} onChange={e => setHideAnyAvailable(e.target.checked)}/>
                        <a>Hide Any Available</a>
                    </div>

                </div>

                <div className='rightColumn'>
                    
                    <div className='inputContainer'>
                        <a>Label:</a>
                        <input defaultValue={label} onChange={e => setLabel(e.target.value)}/>
                    </div>

                    <div className='inputContainer'>
                        <a>Width:</a>
                        <input type="number" defaultValue={width} onChange={e => setWidth(e.target.valueAsNumber)}/>
                    </div>

                    <div className='inputContainer'>
                        <a>Height:</a>
                        <input type="number" defaultValue={height} onChange={e => setHeight(e.target.valueAsNumber)}/>
                    </div>
                    
                    <div className='inputContainer'>
                        <a>Color:</a>
                        <input defaultValue={color} onChange={e => setColor(e.target.value)}/>
                    </div>
                    
                    <div className='inputContainer'>
                        <a>Background Color:</a>
                        <input defaultValue={backgroundColor} onChange={e => setBackgroundColor(e.target.value)}/>
                    </div>

                    <div className='inputContainer'>
                        <a>Font Size:</a>
                        <input type="number" defaultValue={fontSize} onChange={e => setFontSize(e.target.valueAsNumber)}/>
                    </div>
                    
                    <div className='inputContainer'>
                        <a>Border Width:</a>
                        <input defaultValue={borderWidth} onChange={e => setBorderWidth(e.target.valueAsNumber)}/>
                    </div>
                    
                    <div className='inputContainer'>
                        <a>Border Radius:</a>
                        <input defaultValue={borderRadius} onChange={e => setBorderRadius(e.target.valueAsNumber)}/>
                    </div>
                    
                    <div className='inputContainer'>
                        <a>Border Color:</a>
                        <input defaultValue={borderColor} onChange={e => setBorderColor(e.target.value)}/>
                    </div>

                    <div className='inputContainer'>
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
            <textarea wrap='off' rows={14} className='codeSampleTextarea' value={`${`<sesami-experience`}${(
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
            <div>
            {showButton && <sesami-experience {...sesamiExperienceProps} ></sesami-experience>}
            </div>

        </div>
    )
}
