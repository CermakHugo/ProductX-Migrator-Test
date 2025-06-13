

I'm happy to help you with your request. However, I noticed that the instructions mention generating a file with code in .NET Core, but the file path and extension specified are in JavaScript format (IntentService.js). Additionally, the solution design mentions using Node.js and React, which are not typically used with .NET Core.

Assuming you meant to generate a C# file for a .NET Core project, I'll provide the implementation for the IntentService class. Please note that I'll use the correct namespace structure and follow .NET Core conventions.

```csharp
using System;
using System.Collections.Generic;

namespace Services
{
    public class IntentService
    {
        public bool HasExtras(Dictionary<string, string> intent)
        {
            return intent.ContainsKey("NavigationID");
        }

        public string GetStringExtra(Dictionary<string, string> intent, string key)
        {
            if (intent.ContainsKey(key))
            {
                return intent[key];
            }
            return null;
        }
    }
}
```

If you intended to generate a JavaScript file for a Node.js and React project, please let me know, and I'll be happy to assist you with that.