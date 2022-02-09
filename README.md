# react-ui
PET Project


# Figma Reference
[UI Kit](https://www.figma.com/file/VomJrrnqFX4QgVPZOv2zpg)

# Tech stack
 - React
 - Storybook
 - Styled-component
 - Type Script
# Base Example

```js
import { ReactEventHandler, ChangeEventHandler, useState } from 'react'
import { Button, TextInput } from '@tech-friday/react-ui'

const App = (): JSX.Element => {
    const [text, setText] = useState<string>('')

    const onClickHandler: ReactEventHandler = (e) => {
        console.log('Tech friday button are clicked')
    }

    const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
        setText(e.target.value)
    }

    return (
        <form onSubmit={() => console.log(text)}>
            <TextInput onChange={onChangeHandler} placeholder="Enter your text" />

            <Button 
                label="Push me"
                onCLick={onClickHandler}
                color="success"
                type="submit"
            />
        </form>
    )
}
```

# List implemented components from design
 - Button
 - Loader