data_action = [
    {
        title: "Order of Attack",
        icon: "crossed-swords",
        subtitle: "Who goes first",
        description: "Who goes first",
        reference: "add page number",
        bullets: [
            "Rank all characters in DEX order—highest goes first."
        ]
    },
    {
        title: "Surprise attacks",
        icon: "grab",
        subtitle: "Getting the drop on someone",
        description: "Getting the drop on someone",
        reference: "add page number",
        bullets: [
            "Allow a skill roll to determine whether the target anticipates the attack (Spot Hidden, Listen, Psychology).",
            "If successful, switch to the usual DEX combat order.",
            "Otherwise the attack automatically hits or gains a bonus die."             
        ]
    },
    {
        title: "Actions",
        icon: "hand",
        subtitle: "1 action/round",
        description: "Each character gets one action",
        reference: "add page number",
        bullets: [
            "Any action a character can make in a combat round—attacking, dodging, fighting back, fleeing, casting a spell, etc.",
            "Note: some NPCs and monsters have multiple actions."
        ]
    },
    {
        title: "Attempt to harm",
        icon: "magic-swirl",
        subtitle: "Intention to inflict harm",
        description: "The character intents to inflict harm",
        reference: "add page number",
        bullets: [
            "The target of an attack may fight back, dodge the attack or attempt a maneuver.",
            "Both sides make a skill roll.",
            "If the character chooses to fight back, use the target’s Fighting skill to oppose the attacker’s Fighting skill",
            "If the character chooses to dodge, use the target’s Dodge skill to oppose the attacker’s Fighting skill.",
            " Determine who was successful.",
            "Attacking a target that is fighting back: The side with the better level of success avoids being harmed, and inflicts damage on the opponent. In a draw the character initiating the attack beats the character that is fighting back. If both fail, no damage is inflicted.",
            "Attacking a target that is dodging: If the attacker gains a higher level of success, the attack is successful and the attacker inflicts damage on the loser. Otherwise the attack is dodged and no damage is dealt. In a draw the character dodging wins and evades the attack. If both fail, no damage is inflicted.",
            "Combat rolls cannot be pushed.",
            "Roll damage for successful attacks (see Table XVII: Weapons page @@, or 1D3 for unarmed human attack)",
            "If the attacker gains an Extreme level of success (not if fighting back) greater damage is inflicted:",
            "If the attacker is using an impaling weapon: maximum damage (maximum damage plus maximum damage bonus) plus roll weapon damage. ",
            "If the attacker is using a non-impaling weapon (e.g. blunt): maximum damage (maximum damage plus maximum damage bonus)."
        ]
    },
    // {
    //     title: "Fighting maneuvers",
    //     icon: "sprint",
    //     subtitle: "Disarm, knock prone, etc.",
    //     description: "Goal is something other than inflicting physical harm ",
    //     reference: "add page number",
    //     bullets: [
    //         "The increase equals your speed, after applying any modifiers."
    //     ]
    // },
    // {
    //     title: "Disengage",
    //     icon: "journey",
    //     subtitle: "Prevent opportunity attacks",
    //     description: "Your movement doesn't provoke opportunity attacks for the rest of the turn",
    //     reference: "add page number",
    //     bullets: [
    //     ]
    // },
    // {
    //     title: "Dodge",
    //     icon: "aura",
    //     subtitle: "Increase defenses",
    //     description: "Focus entirely on avoiding attacks",
    //     reference: "add page number",
    //     bullets: [
    //         "Until the start of your next turn, any attack roll made against you has disadvantage if you can see the attacker, and you make Dexterity saving throws with advantage.",
    //         "You lose this benefit if you are <i>incapacitated</i> or if your speed drops to 0."
    //     ]
    // },
    // {
    //     title: "Escape",
    //     icon: "manacles",
    //     subtitle: "Escape a grapple",
    //     description: "Escape a grapple",
    //     reference: "add page number",
    //     bullets: [
    //         "To escape a grapple, you must succeed on a Strength (Athletics) or Dexterity (Acrobatics) check contested by the grappler's Strength (Athletics) check.",
    //         "Escaping other conditions that restrain you (such as manacles) may require a Dexterity or Strength check, as specified by the condition."
    //     ]
    // },
    // {
    //     title: "Help",
    //     icon: "telepathy",
    //     subtitle: "Grant an ally advantage",
    //     description: "Grant an ally advantage on an ability check or attack",
    //     reference: "add page number",
    //     bullets: [
    //         "The target gains advantage on the next ability check it makes to perform the task you are helping with.",
    //         "Alternatively, the target gains advantage on the next attack roll against against a creature within 5 feet of you.",
    //         "The advantage lasts until the start of your next turn."
    //     ]
    // },
    // {
    //     title: "Use Object",
    //     icon: "snatch",
    //     subtitle: "Interact, use special abilities",
    //     description: "Interact with a second object or use special object abilities",
    //     reference: "add page number",
    //     bullets: [
    //         "You can interact with one object for free during your turn (such as drawing a weapon or opening a door). If you want to interact with a second object, use this action.",
    //         "When an object requires your action for its use, you also take this action."
    //     ]
    // },
    // {
    //     title: "Use shield",
    //     icon: "round-shield",
    //     subtitle: "Equip or unequip a shield",
    //     description: "Equip or unequip a shield",
    //     reference: "add page number",
    //     bullets: [
    //         "A shield always takes an action to equip or unequip.",
    //         "Armor takes several minutes to equip or unequip."
    //     ]
    // },
    // {
    //     title: "Hide",
    //     icon: "hood",
    //     subtitle: "",
    //     description: "Attempt to hide",
    //     reference: "add page number",
    //     bullets: [
    //         "You can't hide from a creature that can see you. You must have total cover, be in a heavily obscured area, be invisible, or otherwise block the enemy's vision.",
    //         "If you make noise (such as shouting a warning or knocking over a vase), you give away your position.",
    //         "When you try to hide, make a Dexterity (Stealth) check and note the result. Until you are discovered or you stop hiding, that check's total is contested by the Wisdom (Perception) check of any creature that actively searches for signs of your presence.",
    //         "A creature notices you even if it isn't searching unless your Stealth check is higher than its Passive Perception.",
    //         "Out of combat, you may also use a Dexterity (Stealth) check for acts like concealing yourself from enemies, slinking past guards, slipping away without being noticed, or sneaking up on someone without being seen or heard."
    //     ]
    // },
    // {
    //     title: "Search",
    //     icon: "magnifying-glass",
    //     subtitle: "",
    //     description: "Devote your attention to finding something",
    //     reference: "add page number",
    //     bullets: [
    //         "Depending on the nature of your search, the DM might have you make a Wisdom (Perception) check or an Intelligence (Investigation) check."
    //     ]
    // },
    // {
    //     title: "Ready",
    //     icon: "stopwatch",
    //     subtitle: "Choose trigger and action",
    //     description: "Choose a trigger and a response reaction",
    //     reference: "add page number",
    //     bullets: [
    //         "First, you decide what perceivable circumstance will trigger your reaction.",
    //         "Then, you choose the action you will take in response to that trigger, or you choose to move up to your speed in response to it.",
    //         "When the trigger occurs, you can either take your reaction right after the trigger finishes or ignore the trigger.",
    //         "When you ready a spell, you cast it as normal but hold its energy, which you release with your reaction when the trigger occurs. To be readied, a spell must have a casting time of 1 action, and holding onto the spell's magic requires concentration"
    //     ]
    // },
    // {
    //     title: "Use class feature",
    //     icon: "embrassed-energy",
    //     subtitle: "Some features use actions",
    //     description: "Use a racial or class feature that uses an action",
    //     reference: "add page number",
    //     bullets: [

    //     ]
    // },
    // {
    //     title: "Stabilize a creature",
    //     icon: "first-aid",
    //     subtitle: "Administer first aid to a dying creature",
    //     description: "Stop a dying creature from needing to make death saving throws",
    //     reference: "add page number",
    //     bullets: [
    //         "Make a Wisdom (Medicine) check with DC 10",
    //         "On a success, the creature is stable and no longer needs to make death saving throws",
    //         "A stable creature regains 1 hit point after 1d4 hours"
    //     ]
    // },
    // {
    //     title: "Improvise",
    //     icon: "juggler",
    //     subtitle: "Any action not on this list",
    //     description: "Perform any action you can imagine",
    //     reference: "add page number",
    //     bullets: [
    //         "When you describe an action not detailed elsewhere in the rules, the DM tells you whether that action is possible and what kind of roll you need to make, if any, to determine success or failure."
    //     ]
    // }
]
