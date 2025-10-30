# React + TypeScript + Vite
Reflection Questions

1. How did you handle optional props in your components?

I handled optional props in my components by wrapping certain calls in a check like for example onAddToCart && onAddToCart(id) to help stay clear of runtime errors. I also marked optional props with the ? and used guarded rendering so that I could avoid null checks.

2. What considerations did you make when designing the component interfaces?

Some considerations that I've made when designing the component interfaces were to make sure to use Stable ID's for cross compatible components actions, Displaying data that's already shaped so the boundaries stay looking clean, and making sure that I use accessibility hooks.

3. How did you ensure type safety across your components?

I ensured type safety across my components by using correct typed callbacks like (productId: string) => void) to ensure efficiency and type safety. I also made sure to define interfaces like Product and User and also prop types as well like UserProfileCardProps and ProductDisplayProps.

4. What challenges did you face when implementing component composition?

Some challenges I faced when implemention component composition were ensuring the children placement didn't break the layout. I solved this issue by wrapping the (.product.children) and created predictable grid areas to prevent styling collisions. I also felt like Type Safety was also a big challenge in this Lab. I solved this by using exact and accurate callback types for example like onAddToCart?: (productId: string) => void. I also had to remember to use the correct prop and model interfaces so I wouldn't get to many errors at compile time.
