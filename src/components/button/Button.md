A basic Button will default to a water element.

```jsx
import { Button } from 'arcane-magic';

<Button text="Water" />;
```

Four elements can be used: Water, Earth, Fire, Air. Long ago, the four nations lived together in harmony.

```jsx
import { Button, ButtonBending, Element } from 'arcane-magic';

<>
    <Button element={Element.Water} text="Water" />
    <Button element={Element.Earth} text="Earth" />
    <Button element={Element.Fire} text="Fire" />
    <Button element={Element.Air} text="Air" />
</>;
```

One can bend the shape of a Button into three forms: Solid, Shallow and Bare.

```jsx
import { Button, ButtonBending, Element } from 'arcane-magic';

<div style={{ display: 'grid', gridTemplateColumns: '160px 160px 160px' }}>
    <Button
        bending={ButtonBending.Solid}
        element={Element.Water}
        text="Solid Water"
    />
    <Button
        bending={ButtonBending.Shallow}
        element={Element.Water}
        text="Shallow Water"
    />
    <Button
        bending={ButtonBending.Bare}
        element={Element.Water}
        text="Bare Water"
    />
    <Button
        bending={ButtonBending.Solid}
        element={Element.Earth}
        text="Solid Earth"
    />
    <Button
        bending={ButtonBending.Shallow}
        element={Element.Earth}
        text="Shallow Earth"
    />
    <Button
        bending={ButtonBending.Bare}
        element={Element.Earth}
        text="Bare Earth"
    />
    <Button
        bending={ButtonBending.Solid}
        element={Element.Fire}
        text="Solid Fire"
    />
    <Button
        bending={ButtonBending.Shallow}
        element={Element.Fire}
        text="Shallow Fire"
    />
    <Button
        bending={ButtonBending.Bare}
        element={Element.Fire}
        text="Bare Fire"
    />
    <Button
        bending={ButtonBending.Solid}
        element={Element.Air}
        text="Solid Air"
    />
    <Button
        bending={ButtonBending.Shallow}
        element={Element.Air}
        text="Shallow Air"
    />
    <Button
        bending={ButtonBending.Bare}
        element={Element.Air}
        text="Bare Air"
    />
</div>;
```
