# PowerShell script to create Knowledge Base structure for Docusaurus
# This script creates 7 category folders with _category_.json and 3 markdown files each

# Define the base directory for the knowledge base
$baseDir = "knowledge-base"

# Create the base directory if it doesn't exist
if (-not (Test-Path $baseDir)) {
    New-Item -Path $baseDir -ItemType Directory
    Write-Host "Created base directory: $baseDir"
}

# Define the categories with their details
$categories = @(
    @{
        Name = "intelligence"
        Label = "Intelligence"
        Position = 1
        Description = "Core concepts about human and artificial intelligence, cognitive capabilities, and decision-making frameworks"
        Files = @(
            @{
                Name = "cognitive-intelligence-foundations.md"
                Title = "Cognitive Intelligence Foundations"
                Position = 1
                Description = "Basic principles of human cognition and intelligence"
            },
            @{
                Name = "artificial-vs-human-intelligence.md"
                Title = "Artificial vs Human Intelligence"
                Position = 2
                Description = "Comparative analysis framework between AI and human intelligence"
            },
            @{
                Name = "intelligence-amplification-frameworks.md"
                Title = "Intelligence Amplification Frameworks"
                Position = 3
                Description = "Models for enhancing human intelligence through technology"
            }
        )
    },
    @{
        Name = "mental-models"
        Label = "Mental Models"
        Position = 2
        Description = "Thinking frameworks, cognitive patterns, and strategic decision-making tools"
        Files = @(
            @{
                Name = "core-thinking-frameworks.md"
                Title = "Core Thinking Frameworks"
                Position = 1
                Description = "Essential mental models for strategic thinking"
            },
            @{
                Name = "decision-making-models.md"
                Title = "Decision Making Models"
                Position = 2
                Description = "Frameworks for better choices and decision processes"
            },
            @{
                Name = "cognitive-bias-toolkit.md"
                Title = "Cognitive Bias Toolkit"
                Position = 3
                Description = "Recognizing and working with cognitive biases"
            }
        )
    },
    @{
        Name = "graph-theory"
        Label = "Graph Theory"
        Position = 3
        Description = "Network analysis, connection mapping, and systemic thinking approaches"
        Files = @(
            @{
                Name = "network-analysis-basics.md"
                Title = "Network Analysis Basics"
                Position = 1
                Description = "Fundamentals of network thinking and graph theory"
            },
            @{
                Name = "influence-mapping-systems.md"
                Title = "Influence Mapping Systems"
                Position = 2
                Description = "Tracking influence and information flow in networks"
            },
            @{
                Name = "connection-pattern-recognition.md"
                Title = "Connection Pattern Recognition"
                Position = 3
                Description = "Identifying and analyzing patterns in network structures"
            }
        )
    },
    @{
        Name = "systemic-structures"
        Label = "Systemic Structures"
        Position = 4
        Description = "Understanding complex systems, feedback loops, and organizational patterns"
        Files = @(
            @{
                Name = "complex-systems-fundamentals.md"
                Title = "Complex Systems Fundamentals"
                Position = 1
                Description = "Understanding emergence and complexity in systems"
            },
            @{
                Name = "feedback-loop-dynamics.md"
                Title = "Feedback Loop Dynamics"
                Position = 2
                Description = "How systems self-regulate and evolve through feedback"
            },
            @{
                Name = "emergent-behavior-patterns.md"
                Title = "Emergent Behavior Patterns"
                Position = 3
                Description = "Predicting and analyzing system-level outcomes"
            }
        )
    },
    @{
        Name = "data-analytics"
        Label = "Data Analytics"
        Position = 5
        Description = "Data interpretation, statistical analysis, and insight extraction methods"
        Files = @(
            @{
                Name = "data-interpretation-methods.md"
                Title = "Data Interpretation Methods"
                Position = 1
                Description = "Making sense of information and data structures"
            },
            @{
                Name = "statistical-insight-extraction.md"
                Title = "Statistical Insight Extraction"
                Position = 2
                Description = "Finding meaningful patterns in data through statistics"
            },
            @{
                Name = "predictive-pattern-analysis.md"
                Title = "Predictive Pattern Analysis"
                Position = 3
                Description = "Using data to forecast trends and future states"
            }
        )
    },
    @{
        Name = "digital-tooling"
        Label = "Digital Tooling"
        Position = 6
        Description = "Technology stack, AI tools, automation systems, and digital workflows"
        Files = @(
            @{
                Name = "ai-tool-ecosystem.md"
                Title = "AI Tool Ecosystem"
                Position = 1
                Description = "Current landscape and selection criteria for AI tools"
            },
            @{
                Name = "automation-workflow-design.md"
                Title = "Automation Workflow Design"
                Position = 2
                Description = "Building efficient digital processes and workflows"
            },
            @{
                Name = "digital-productivity-systems.md"
                Title = "Digital Productivity Systems"
                Position = 3
                Description = "Optimizing human-digital collaboration and productivity"
            }
        )
    },
    @{
        Name = "evergreen-frameworks"
        Label = "Evergreen Frameworks"
        Position = 7
        Description = "Timeless frameworks, foundational concepts, and enduring strategic models"
        Files = @(
            @{
                Name = "timeless-strategic-models.md"
                Title = "Timeless Strategic Models"
                Position = 1
                Description = "Enduring strategic thinking tools and frameworks"
            },
            @{
                Name = "foundational-psychology-frameworks.md"
                Title = "Foundational Psychology Frameworks"
                Position = 2
                Description = "Core psychological principles and models"
            },
            @{
                Name = "enduring-cultural-analysis-tools.md"
                Title = "Enduring Cultural Analysis Tools"
                Position = 3
                Description = "Methods for understanding culture and social dynamics"
            }
        )
    }
)

# Create each category folder with its files
foreach ($category in $categories) {
    $categoryPath = Join-Path -Path $baseDir -ChildPath $category.Name
    
    # Create category folder
    if (-not (Test-Path $categoryPath)) {
        New-Item -Path $categoryPath -ItemType Directory
        Write-Host "Created category directory: $categoryPath"
    }
    
    # Create _category_.json file
    $categoryJson = @{
        label = $category.Label
        position = $category.Position
        link = @{
            type = "generated-index"
            description = $category.Description
        }
    } | ConvertTo-Json -Depth 3
    
    $categoryJsonPath = Join-Path -Path $categoryPath -ChildPath "_category_.json"
    Set-Content -Path $categoryJsonPath -Value $categoryJson
    Write-Host "Created category config: $categoryJsonPath"
    
    # Create markdown files for this category
    foreach ($file in $category.Files) {
        $filePath = Join-Path -Path $categoryPath -ChildPath $file.Name
        
        # Create markdown content with frontmatter
        $frontmatter = @"
---
sidebar_position: $($file.Position)
title: "$($file.Title)"
description: "$($file.Description)"
tags: [evergreen, $($category.Name), autonateai]
draft: false
---

# $($file.Title)

## Overview
*[Brief overview of what this evergreen content covers - 2-3 sentences]*

## Core Concepts
*[Placeholder for main concepts - bullet points]*

## Framework Application
*[Placeholder for how to apply this knowledge - steps or examples]*

## Key Takeaways
*[Placeholder for main insights - numbered list]*

## Related Knowledge
*[Placeholder for connections to other knowledge base articles]*

---

**Note:** This is foundational content in the AutoNateAI Knowledge Base. Check back for regular updates and deeper analysis.

*Part of the Psychology x AI x Culture intelligence framework.*
"@
        
        Set-Content -Path $filePath -Value $frontmatter
        Write-Host "Created markdown file: $filePath"
    }
}

Write-Host "Knowledge Base structure created successfully!"
