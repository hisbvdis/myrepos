We Don’t Use IDs (ID Selectors)
The ID provides a unique name for an HTML element. If the name is unique, you can’t reuse it in the
interface. This prevents you from reusing the code.

We Don’t Use Tag Selectors
HTML page markup is unstable: A new design can change the nesting of the sections, heading levels
(for example, from <h1> to <h3>) or turn the <p>paragraph into the <div> tag. Any of these changes
will break styles that are written for tags. Even if the design doesn’t change, the set of tags is limited.
To use an existing layout in another project, you must solve conflicts between styles written for the
same tags

We Don’t Use CSS Reset
CSS reset is a set of global CSS rules created for the whole page. These styles affect all layout nodes,
violate the independence of components, and make it harder to reuse them.
In BEM, "reset" and "normalize" aren’t even used for a single block. Resetting and normalization
cancel existing styles and replace them with other styles, which you will have to change and update
later in any case. As a result, the developer must write styles that override the ones that were just
reset.

We Don’t Use The Universal Selector (*)
The universal selector indicates that the project features a style that affects all nodes in the layout.
This limits reuse of the layout in other projects.
In addition, a universal selector can make the project code unpredictable. For example, it can affect
the styles of the universal library components.

We Don’t Use Nested Selectors
Nested selectors increase code coupling and make it difficult to reuse the code.
The BEM methodology doesn’t prohibit nested selectors, but it recommends not to use them too
much. For example, nesting is appropriate if you need to change styles of the elements depending on
the block’s state or its assigned theme.

