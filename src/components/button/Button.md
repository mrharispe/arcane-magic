A basic Button will default to a water element.

```jsx
import { Button } from 'arcane-magic';

<Button text="Water" />;
```

In case you need icons, FontAwesomeIcons are supported

```jsx
import { Button } from 'arcane-magic';
import { faTint } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

<Button text="Water" icon={<FontAwesomeIcon icon={faTint} />} />;
```

Four elements can be used: Water, Earth, Fire, Air. Long ago, the four nations lived together in harmony.

```jsx
import { Button, ButtonBending, Element } from 'arcane-magic';
import {
    faTint,
    faLeaf,
    faFire,
    faWind,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

<>
    <Button element={Element.Water} icon={<FontAwesomeIcon icon={faTint} />} />
    <Button element={Element.Earth} icon={<FontAwesomeIcon icon={faLeaf} />} />
    <Button element={Element.Fire} icon={<FontAwesomeIcon icon={faFire} />} />
    <Button element={Element.Air} icon={<FontAwesomeIcon icon={faWind} />} />
</>;
```

One can bend the shape of a Button into three forms: Solid, Shallow and Bare.

```jsx
import { Button, ButtonBending, Element } from 'arcane-magic';
import {
    faTint,
    faLeaf,
    faFire,
    faWind,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

<div style={{ display: 'grid', gridTemplateColumns: '70px 70px 70px' }}>
    <Button
        bending={ButtonBending.Solid}
        element={Element.Water}
        icon={<FontAwesomeIcon icon={faTint} />}
    />
    <Button
        bending={ButtonBending.Shallow}
        element={Element.Water}
        icon={<FontAwesomeIcon icon={faTint} />}
    />
    <Button
        bending={ButtonBending.Bare}
        element={Element.Water}
        icon={<FontAwesomeIcon icon={faTint} />}
    />
    <Button
        bending={ButtonBending.Solid}
        element={Element.Earth}
        icon={<FontAwesomeIcon icon={faLeaf} />}
    />
    <Button
        bending={ButtonBending.Shallow}
        element={Element.Earth}
        icon={<FontAwesomeIcon icon={faLeaf} />}
    />
    <Button
        bending={ButtonBending.Bare}
        element={Element.Earth}
        icon={<FontAwesomeIcon icon={faLeaf} />}
    />
    <Button
        bending={ButtonBending.Solid}
        element={Element.Fire}
        icon={<FontAwesomeIcon icon={faFire} />}
    />
    <Button
        bending={ButtonBending.Shallow}
        element={Element.Fire}
        icon={<FontAwesomeIcon icon={faFire} />}
    />
    <Button
        bending={ButtonBending.Bare}
        element={Element.Fire}
        icon={<FontAwesomeIcon icon={faFire} />}
    />
    <Button
        bending={ButtonBending.Solid}
        element={Element.Air}
        icon={<FontAwesomeIcon icon={faWind} />}
    />
    <Button
        bending={ButtonBending.Shallow}
        element={Element.Air}
        icon={<FontAwesomeIcon icon={faWind} />}
    />
    <Button
        bending={ButtonBending.Bare}
        element={Element.Air}
        icon={<FontAwesomeIcon icon={faWind} />}
    />
</div>;
```
