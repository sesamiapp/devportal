import React, { useState } from 'react'

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'sesami-experience': any
        }
    }
}

export const Configurator = () => {

    // const [ label, setLabel ] = useState("Select Time")
    const [ locale, setLocale ] = useState("fr")
    
    
    return (
        <div style={{
            width: 160,
            display: 'flex',
            flexDirection: 'column',
            gap: 16
        }}>
            
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4
            }}>

                {/* <input defaultValue={label} onChange={e => setLabel(e.target.value)}/> */}
                locale:
                <select defaultValue={locale} onChange={e => setLocale(e.target.value)}>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="ja">Japanese</option>
                    <option value="fr">France</option>
                </select>
            </div>

            <sesami-experience
                shop-id={"75849498919"}
                product-id="8293753520423"
                variant-id="45009108828455"
                locale={locale}
                skip-monthly-calendar
                button-customized-settings="%7B%22auto_add_to_cart%22%3Afalse%2C%22skip_cart%22%3Afalse%2C%22hide_any_available%22%3Afalse%2C%22button-label%22%3A%22Select time%22%2C%22alignment%22%3A%22center%22%2C%22color%22%3A%22%22%2C%22color_background%22%3A%22%23CCC%22%2C%22font_size%22%3A16%2C%22border_width%22%3A1%2C%22border_radius%22%3A4%2C%22border_color%22%3A%22%23000000%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%2240px%22%2C%22cta_background_color%22%3A%22%23333%22%2C%22cta_text_color%22%3A%22%23ffffff%22%7D"
                button-label={"Select Time"}
            ></sesami-experience>

        </div>
    )
}
