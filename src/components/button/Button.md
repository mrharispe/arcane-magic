A basic Button will default to a water element.

```jsx
import { Button } from 'arcane-magic';

<Button text="Water" />;
```

Four elements can be used: Water, Earth, Fire, Air. Long ago, the four nations lived together in harmony.

```jsx
import { Button, ButtonBending, ButtonElement } from 'arcane-magic';

<>
    <Button element={ButtonElement.Water} text="Water" />
    <Button element={ButtonElement.Earth} text="Earth" />
    <Button element={ButtonElement.Fire} text="Fire" />
    <Button element={ButtonElement.Air} text="Air" />
</>;
```

One can bend the shape of a Button into three forms: Solid, Shallow and Bare.

```jsx
import { Button, ButtonBending, ButtonElement } from 'arcane-magic';

<div style={{ display: 'grid', gridTemplateColumns: '160px 160px 160px' }}>
    <Button
        bending={ButtonBending.Solid}
        element={ButtonElement.Water}
        text="Solid Water"
    />
    <Button
        bending={ButtonBending.Shallow}
        element={ButtonElement.Water}
        text="Shallow Water"
    />
    <Button
        bending={ButtonBending.Bare}
        element={ButtonElement.Water}
        text="Bare Water"
    />
    <Button
        bending={ButtonBending.Solid}
        element={ButtonElement.Earth}
        text="Solid Earth"
    />
    <Button
        bending={ButtonBending.Shallow}
        element={ButtonElement.Earth}
        text="Shallow Earth"
    />
    <Button
        bending={ButtonBending.Bare}
        element={ButtonElement.Earth}
        text="Bare Earth"
    />
    <Button
        bending={ButtonBending.Solid}
        element={ButtonElement.Fire}
        text="Solid Fire"
    />
    <Button
        bending={ButtonBending.Shallow}
        element={ButtonElement.Fire}
        text="Shallow Fire"
    />
    <Button
        bending={ButtonBending.Bare}
        element={ButtonElement.Fire}
        text="Bare Fire"
    />
    <Button
        bending={ButtonBending.Solid}
        element={ButtonElement.Air}
        text="Solid Air"
    />
    <Button
        bending={ButtonBending.Shallow}
        element={ButtonElement.Air}
        text="Shallow Air"
    />
    <Button
        bending={ButtonBending.Bare}
        element={ButtonElement.Air}
        text="Bare Air"
    />
</div>;
```
