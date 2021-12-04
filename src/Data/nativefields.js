const nativeFields = [
    {
        "id": "618f686270667e12071d04c9",
        "name": "Text",
        "icon": "",
        "machine_name": "text",
        "description": "",
        "field_config": {
            "fields": [
                {
                    "name": "Display Name",
                    "required": true,
                    "type": "text"
                },
                {
                    "name": "Unique ID",
                    "required": true,
                    "type": "text"
                },
                {
                    "name": "Placeholder",
                    "required": false,
                    "type": "text"
                },
                {
                    "name": "Char Limit",
                    "required": false,
                    "type": "text"
                },
                {
                    "name": "Multiple",
                    "required": false,
                    "type": "checkbox"
                },
                {
                    "name": "Mandatory",
                    "required": false,
                    "type": "checkbox"
                }
            ]
        },
        "created_at": "2021-10-16T22:12:41Z",
        "updated_at": "2021-10-16T22:12:41Z"
    },
    {
        "id": "618f68754ba07e70f1a6e319",
        "name": "Textarea",
        "icon": "",
        "machine_name": "textarea",
        "description": "",
        "field_config": {
            "fields": [
                {
                    "name": "Display Name",
                    "required": true,
                    "type": "text"
                },
                {
                    "name": "Unique ID",
                    "required": true,
                    "type": "text"
                },
                {
                    "name": "Placeholder",
                    "required": false,
                    "type": "text"
                },
                {
                    "name": "Char Limit",
                    "required": false,
                    "type": "text"
                },
                {
                    "name": "Multiple",
                    "required": false,
                    "type": "checkbox"
                },
                {
                    "name": "Mandatory",
                    "required": false,
                    "type": "checkbox"
                }
            ]
        },
        "created_at": "2021-10-16T22:12:41Z",
        "updated_at": "2021-10-16T22:12:41Z"
    },
    {
        "id": "618f6895a52954bfc4f1a904",
        "name": "Markdown",
        "icon": "",
        "machine_name": "markdown",
        "description": "",
        "field_config": {
            "fields": [
                {
                    "name": "Display Name",
                    "required": true,
                    "type": "text"
                },
                {
                    "name": "Unique ID",
                    "required": true,
                    "type": "text"
                },
                {
                    "name": "Multiple",
                    "required": false,
                    "type": "checkbox"
                },
                {
                    "name": "Mandatory",
                    "required": false,
                    "type": "checkbox"
                }
            ]
        },
        "created_at": "2021-10-16T22:12:41Z",
        "updated_at": "2021-10-16T22:12:41Z"
    },
    {
        "id": "618f6e96fce378e0facd8f45",
        "name": "Section",
        "icon": "",
        "machine_name": "section",
        "description": "",
        "field_config": {
            "fields": [
                {
                    "name": "Display Name",
                    "required": true,
                    "type": "text"
                },
                {
                    "name": "Unique ID",
                    "required": true,
                    "type": "text"
                }
            ]
        },
        "created_at": "2021-10-16T22:12:41Z",
        "updated_at": "2021-10-16T22:12:41Z"
    },
    {
        "id": "618f6f53d0886705a71a9088",
        "name": "Brick Reference",
        "icon": "",
        "machine_name": "brick_reference",
        "description": "",
        "field_config": {
            "fields": [
                {
                    "name": "Display Name",
                    "required": true,
                    "type": "text"
                },
                {
                    "name": "Unique ID",
                    "required": true,
                    "type": "text"
                },
                {
                    "name": "Multiple",
                    "required": false,
                    "type": "checkbox"
                },
                {
                    "name": "Select Brick",
                    "required": true,
                    "type": "select",
                    "api_call": true,
                    "api_target": "CURRENT_PROJECT > BRICKS",
                    "option": []
                }
            ]
        },
        "created_at": "2021-10-16T22:12:41Z",
        "updated_at": "2021-10-16T22:12:41Z"
    },
    {
        "id": "618f7adc70e9ca8c2ae94fad",
        "name": "Date",
        "icon": "",
        "machine_name": "date",
        "description": "",
        "field_config": {
            "fields": [
                {
                    "name": "Display Name",
                    "required": true,
                    "type": "text"
                },
                {
                    "name": "Unique ID",
                    "required": true,
                    "type": "text"
                },
                {
                    "name": "Mandatory",
                    "required": false,
                    "type": "checkbox"
                }
            ]
        },
        "created_at": "2021-10-16T22:12:41Z",
        "updated_at": "2021-10-16T22:12:41Z"
    },
    {
        "id": "61961e82fe9729923cc6767a",
        "name": "Select",
        "icon": "",
        "machine_name": "select",
        "description": "",
        "field_config": {
            "fields": [
                {
                    "name": "Display Name",
                    "required": true,
                    "type": "text"
                },
                {
                    "name": "Unique ID",
                    "required": true,
                    "type": "text"
                },
                {
                    "name": "Mandatory",
                    "required": false,
                    "type": "checkbox"
                },
                {
                    "name": "Selection Type",
                    "required": false,
                    "type": "dropdown",
                    "options": [
                        "Single",
                        "Multiple"
                    ]
                },
                {
                    "name": "Data Type",
                    "required": true,
                    "type": "radio",
                    "options": [
                        "Number",
                        "Text"
                    ]
                },
                {
                    "name": "Add Choices",
                    "required": true,
                    "type": "textarea"
                }
            ]
        },
        "created_at": "2021-10-16T22:12:41Z",
        "updated_at": "2021-10-16T22:12:41Z"
    }
]
export default nativeFields