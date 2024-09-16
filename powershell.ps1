# Step 1: Login to Azure
Connect-AzAccount

# Step 2: Define variables
$resourceGroupName = "example-resources"
$location = "West Europe"
$storageAccountName = "examplestorageacct"

# Step 3: Create a Resource Group
New-AzResourceGroup -Name $resourceGroupName -Location $location

# Step 4: Create a Storage Account
New-AzStorageAccount -ResourceGroupName $resourceGroupName `
                     -Name $storageAccountName `
                     -Location $location `
                     -SkuName "Standard_LRS" `
                     -Kind "StorageV2" `
                     -AccessTier "Hot"