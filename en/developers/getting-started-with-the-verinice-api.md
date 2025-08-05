<!-- © 2024 The Project Contributors - see AUTHORS.txt -->
# Getting Started with the verinice API

Learn how to authenticate and load and create your first elements.

## Prerequisites

In this documentation, it is assumed that you are familiar with the
basic concepts of the verinice [object model](/object-model/index).

## Authentication

verinice uses [OpenID Connect (OIDC)](https://openid.net/connect/) for authentication, which is built on top of [OAuth 2.0](https://oauth.net/2/). [Keycloak](https://www.keycloak.org/) is used as the authentication server. For each request sent to the verinice API, an access token is required. Keycloak's RESTful API exposes a variety of endpoints for OAuth 2.0 flows. The token endpoint allows us to retrieve an access token. The method `get_token` creates a token with this endpoint:

```python
import requests

def get_token():
    body = { 
        'username':USER_NAME, 
        'password':PASSWORD,
        'otp':OTP,
        'grant_type':'password',
        'client_id':'veo-prod'
    }

    response = requests.post("https://auth.verinice.com/auth/realms/verinice-veo/protocol/openid-connect/token", data = body)
    if (response.status_code != 200):
        print("Error while getting token, status code: " + str(response.status_code))
    return "Bearer " + response.json().get('access_token')

```
For the creation of a token, these parameters must be set:
 - `USER_NAME`: A valid user name
 - `PASSWORD`: The password for the user
 - `OTP`: One-time password (use empty string if 2-factor authentication is not configured for the user)

## Loading Units

The unit is the root node in verinice's [object model](/object-model/index) and the hierarchical root of elements. A unit represents an organization (e.g. a company) or a department in an organization. Therefore, almost all operations with the verinice API require a unit.

All units owned by the client of an account are loaded using this endpoint:

`GET /units` ([OpenAPI documentation](https://api.verinice.com/veo/swagger-ui/index.html?configUrl=/veo/v3/api-docs/swagger-config#/unit-controller/getUnits))

Python code listing to load units:
```python
import requests

token = get_token()
headers = {
    'Authorization': token,
}
response = requests.get("https://api.verinice.com/veo/units", headers=headers, verify=verify_ssl)
```

The endpoint returns an array of units. The ID or the name of the first unit can be read with this statements:
```python
units = response.json()
unit_id = units[0].get("id")
unit_name = units[0].get("name")
```

## Loading Domains

The different areas of expertise, which can be managed with verinice, are called domains. If an element is used in a business context, such as data protection, then it must be assigned to one or more domains. For this reason, a domain ID must usually be specified when a function is called in the API.

All domains that are available are loaded with this API method:

`GET /domains` ([OpenAPI documentation](https://api.verinice.com/veo/swagger-ui/index.html?configUrl=/veo/v3/api-docs/swagger-config#/domain-controller/getDomains))


Python code listing to load domains:
```python
import requests

token = get_token()
headers = {
    'Authorization': token,
}
response = requests.get("https://api.verinice.com/veo/domains", headers=headers, verify=verify_ssl)
```

This endpoint also returns an array of domains. The ID or name of the first domain is retrieved with these statements:
```python
domains = response.json()
domain_id = domains[0].get("id")
domain_name = domains[0].get("name")
```

## Loading Elements

Besides units and domains, [elements (a.k.a. business objects)](../object-model/objects) can also be loaded and modified via the API. There are eight different element types in verinice:
[assets](../object-model/objects#asset), [controls](../object-model/objects#control), [documents](../object-model/objects#dokument), [incidents](../object-model/objects#vorfall), [persons](../object-model/objects#person), [processes](../object-model/objects#prozess), [scenarios](../object-model/objects#szenario) & [scopes](../object-model/objects#scope).

For each element type, there is a set of API endpoints for managing elements of that type. For example, the following endpoint loads all processes that are associated with a certain domain:

 `GET /domains/DOMAIN-ID/processes` ([OpenAPI documentation](https://api.verinice.com/veo/swagger-ui/index.html?configUrl=/veo/v3/api-docs/swagger-config#/process-in-domain-controller/getProcesses_1))

The following snippet shows how to load all processes in a unit that are associated with a certain domain:

```python
import requests

token = get_token()
headers = {
    'Authorization': token,
}
response = requests.get("https://api.verinice.com/veo/domain/" + domain_id + "/processes?unit=" + unit_id, headers=headers, verify=verify_ssl)
```
The response of all endpoints returning element lists contains a paginable result with a single page of items, the number of all items in the result, and the number of pages.

containing a single page of items, the number of all items in the result, and the number of pages:

```json
{
    "items": [
        {
            "name": "A business process",
            "id": "004195cf-778b-46be-840e-55c3fcc8edbd",
            ...
        },
        {
            ...
        },
        ...
    ],
    "totalItemCount": 42,
    "pageCount": 5,
    "page": 0
}
```

The number of items in the page can be specified with the `size` parameter, the page number with the `page` parameter:


`GET /domains/DOMAIN-ID/processes?size=5&page=3` ([OpenAPI documentation](https://api.verinice.com/veo/swagger-ui/index.html?configUrl=/veo/v3/api-docs/swagger-config#/process-in-domain-controller/getProcesses_1))

Now you can iterate over the items in the page to process the data:

```python
response = requests.get("https://api.verinice.com/veo/domains" + domain_id + "/processes?unit=" + unit_id, headers=headers, verify=verify_ssl)
json_data = response.json()
for process in json_data.get("items"):
    process_id = process.get("id")
```

## Searching for elements


All endpoints for loading elements have the same search parameters, which are briefly described here. All parameters can be combined as needed.

### subType 

Find all elements of a certain sub-type. The available sub-types for each element type are defined in the domain.

`GET /domains/DOMAIN-ID/documents?subType=DOC_Contract` ([OpenAPI documentation](https://api.verinice.com/veo/swagger-ui/index.html?configUrl=/veo/v3/api-docs/swagger-config#/document-in-domain-controller/getDocument))

Finds all documents of the sub-type _DOC_Contract_ (Contracts).

### name

Find all elements where the name contains a given string (case-insensitive):

`GET /domains/DOMAIN-ID /assets/en?name=fire` ([OpenAPI documentation](https://api.verinice.com/veo/swagger-ui/index.html?configUrl=/veo/v3/api-docs/swagger-config#/asset-in-domain-controller/getAssets))

Finds all assets that contain _fire_ in the name, e.g. an asset _firewall_ or _fire extinguisher_.

### status

Find all elements of a certain status. The possible statuses for each element sub-type are defined in the domain.

`GET /domains/DOMAIN-ID/controls?status=RELEASED` ([OpenAPI documentation](https://api.verinice.com/veo/swagger-ui/index.html?configUrl=/veo/v3/api-docs/swagger-config#/control-in-domain-controller/getControls_1))

Finds all controls with the status _RELEASED_.


### hasChildElements

Find all elements that have at least one part or member.

`GET /domains/DOMAIN-ID/processes?hasChildElements=true` ([OpenAPI documentation](https://api.verinice.com/veo/swagger-ui/index.html?configUrl=/veo/v3/api-docs/swagger-config#/process-in-domain-controller/getProcesses_1))

Finds all processes that have parts (sub processes).

### hasParentElements

Find all elements that are either a part of at least one [composite](../object-model/objects#composite) or a member of at least one [scope](../object-model/objects#scope).

`GET /domains/DOMAIN-ID /assets/en?hasParentElements=true` ([OpenAPI documentation](https://api.verinice.com/veo/swagger-ui/index.html?configUrl=/veo/v3/api-docs/swagger-config#/asset-in-domain-controller/getAssets))

Finds all assets that that are a part of another asset.

### childElementIds

Find all elements that contain at least one of the given elements as a part or member. One or several UUIDs can be specified, separated by commas.

`GET /domains/DOMAIN-ID /assets/en?childElementIds=823dfbfa-21d4-4174-b184-38734465cbbb` ([OpenAPI documentation](https://api.verinice.com/veo/swagger-ui/index.html?configUrl=/veo/v3/api-docs/swagger-config#/asset-in-domain-controller/getAssets))

Finds all incidents that have incident with ID _823dfbfa-21d4-4174-b184-38734465cbbb_ as a part.

## Loading a single element

A single element can be loaded by its UUID. The following API endpoint loads a process from the viewpoint of a domain (i.e., only process data that is relevant for given domain is contained in the response):

`GET /domains/DOMAIN-ID/processes/PROCESS-ID` ([OpenAPI documentation](https://api.verinice.com/veo/swagger-ui/index.html?configUrl=/veo/v3/api-docs/swagger-config#/process-in-domain-controller/getElement_5))

Python code listing to load a process:
```python
import requests

token = get_token()
headers = {
    'Authorization': token,
}
response = requests.get("https://api.verinice.com/veo/domains/744e84f8-0c91-4ccc-a923-795b9f07ee6b/processes/e529ee00-c995-444f-9a1d-2c07cf03143e", headers=headers, verify=verify_ssl)
```

This exemplary response body illustrates the structure of an element:

```json{11,17,47} 
{
    "createdAt": "2022-06-27T15:11:59.877590Z",
    "createdBy": "username A",
    "updatedAt": "2022-06-27T15:11:59.877590Z",
    "updatedBy": "username B",
    "name": "Business process",
    "designator": "PRO-347",
    "description": "A business process, business method or business function is a collection of related, \
    structured activities or tasks by people or equipment in which a specific sequence produces a service \
    or product for a particular customer or customers.",
    "owner": {
        "displayName": "veo Unit",
        "targetUri": "https://api.verinice.com/veo/units/a602f30d-54be-4565-bacd-3c422ab88e18",
        "searchesUri": "https://api.verinice.com/veo/units/searches",
        "resourcesUri": "https://api.verinice.com/veo/units{?parent,displayName}"
    },
    "subType": "PRO_DataTransfer",
    "status": "IN_PROGRESS",
    "links": {
        "process_dataType": [
            {
                "attributes": {},
                "target": {
                    "displayName": "AST-935 Customer data",
                    "targetUri": "https://api.verinice.com/veo /assets/en/faf5d744-2bc8-4c19-bd5f-783f59d719a2",
                    "searchesUri": "https://api.verinice.com/veo /assets/en/searches",
                    "resourcesUri": "https://api.verinice.com/veo /assets/en{?unit,displayName,subType,status,\
                    childElementIds,hasParentElements,hasChildElements,description,designator,name,updatedBy,size,page,\
                    sortBy,sortOrder}"
                }
            }
        ],
        "process_processor": [
            {
                "attributes": {},
                "target": {
                    "displayName": "SCP-460 IT Development Company",
                    "targetUri": "https://api.verinice.com/veo/scopes/26757ad0-a76b-41ab-bbcb-9b67e2fc1c90",
                    "searchesUri": "https://api.verinice.com/veo/scopes/searches",
                    "resourcesUri": "https://api.verinice.com/veo/scopes{?unit,displayName,subType,status,\
                    childElementIds,hasParentElements,hasChildElements,description,designator,name,updatedBy,size,page,\
                    sortBy,sortOrder}"
                }
            }
        ]
    },
    "customAspects": {
        "process_recipient": {
            "process_recipient_type": "process_recipient_type_processor"
        },
        "process_dataTransfer": {
            "process_dataTransfer_legalBasis": [],
            "process_dataTransfer_explanation": "The data is always deleted after the online meeting has ended.",
            "process_dataTransfer_otherLegalBasis": "Art. 6 Abs. 1 S. 1 lit. b DSGVO"
        }
    },
    "decisionResults": {},
    "parts": [],
    "riskValues": {}
    "id": "20c06dc7-5eec-46ec-b866-72cc12537be2",
    "type": "process",
    "_self": "https://api.verinice.com/veo/domains/b5110307-ca95-4bcb-bd7a-d2570f3d8946/processes/20c06dc7-5eec-46ec-b866-72cc12537be2"
}
```

The property `owner` references the [unit](/object-model/objects#unit) to which the element belongs, `links` contains links to other elements and `customAspects` contains domain-specific properties. The domain-specific sub-type and lifecycle status are also present.

## Creating an element

After loading a unit and domain ID, an element (a.k.a. business object) can be created in a domain with the API endpoint:

`POST /domains/DOMAIN-ID /assets/en` ([OpenAPI documentation](https://api.verinice.com/veo/swagger-ui/index.html?configUrl=/veo/v3/api-docs/swagger-config#/asset-in-domain-controller/createElement_7))

Python code listing to create an asset:

```python
element = {
    'name': 'Mail Server',
    # The possible sub-types and statuses are defined in the domain.
    'subType': 'AST_IT-System',
    'status': 'RELEASED'
    # Each element is owned by a unit.
    'owner': {
        'targetUri': 'https://api.verinice.com/veo/units/a602f30d-54be-4565-bacd-3c422ab88e18',
    },
}
url = "https://api.verinice.com/veo/domains/b5110307-ca95-4bcb-bd7a-d2570f3d8946 /assets/en"
token = get_token()
headers = {
    "Authorization": token,
    "Content-Type": "application/json",
}
response = requests.post(url, data=element, headers=headers, verify=True)
if (response.status_code != 201):
    print("Error while posting element: " + str(response.status_code))
    raise Exception("Error while posting element: " + str(response.status_code))
element_id = response.json().get("resourceId")
```

## Updating an element

Scopes can be updated with this endpoint, for example:

`PUT /domains/DOMAIN-ID/scopes/{uuid}` ([OpenAPI documentation](https://api.verinice.com/veo/swagger-ui/index.html?configUrl=/veo/v3/api-docs/swagger-config#/scope-in-domain-controller/updateElement))

The endpoints for the other element types have URLs according to their type.

The verinice API uses [ETags](https://en.wikipedia.org/wiki/HTTP_ETag) for [optimistic concurrency control](https://en.wikipedia.org/wiki/Optimistic_concurrency_control). This prevents concurrent changes to a resource from multiple clients overwriting each other.

If a single element is loaded, an `ETag` header is returned. When updating the element, the PUT request must contain an `If-Match` header that is set to the element's current ETag. Python code listing to update a scope with an ETag:
```python
import requests
import json
import re
   
token = get_token()
url = "https://api.verinice.com/domains/744e84f8-0c91-4ccc-a923-795b9f07ee6b/scopes/e4af7789-5da0-49ed-86c6-8ecea8262f0f"

# Load the scope
headers = {
    'Authorization': token
}
response = requests.get(url, headers=headers, verify=True)
etag = response.headers["ETag"]

scope:dict = response.json()
# Modify the scope data....

# Update the scope 
# Set etag without quotes as header "If-Match"
headers = {
    "Authorization": token,
    "Content-Type": "application/json",
    "If-Match": etag
}
requests.put(url, data = json.dumps(scope), headers=headers, verify=True)
```

## Deleting an element

To delete an element, execute a request with the DELETE method on the element's URL:

`DELETE /scenarios/{uuid}` ([OpenAPI documentation](https://api.verinice.com/veo/swagger-ui/index.html?configUrl=/veo/v3/api-docs/swagger-config#/scenario-controller/deleteScenario))

Python code listing to delete a scenario:

```python
import requests
token = get_token()
url = "https://api.verinice.com/scenarios/e4af7789-5da0-49ed-86c6-8ecea8262f0f"

headers = {
    'Authorization': token
}
response = requests.delete(url, headers=headers, verify=True)
```

When a scope is deleted, the members of the scope are not deleted, but removed from the scope before deletion. Also, when a composite containing parts is deleted, the parts are not deleted, but removed from the composite before deletion. When a unit is deleted, all elements in the unit are deleted along with the unit.