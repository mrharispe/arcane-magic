A basic Button will default to a water element.

```jsx
import { Button } from 'arcane-magic';

<Button text="Water" />;
```

One can bend the shape of a Button into three forms: Solid, Shallow and Bare.

```jsx
import { Button, ButtonBending } from 'arcane-magic';

<>
    <Button bending={ButtonBending.Solid} text="Solid Water" />
    <Button bending={ButtonBending.Shallow} text="Shallow Water" />
    <Button bending={ButtonBending.Bare} text="Bare Water" />
</>;
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
