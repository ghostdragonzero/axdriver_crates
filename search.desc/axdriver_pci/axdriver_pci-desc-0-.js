searchState.loadedDescShard("axdriver_pci", 0, "Structures and functions for PCI bus operations.\nThe device can behave as a bus master.\nInformation about a PCI Base Address Register.\nThe BAR must be mapped below 1MiB.\nThe device has a linked list of capabilities.\nA PCI Configuration Access Mechanism.\nInformation about a PCI device capability.\nThe command register in PCI configuration space.\nThe device detects a parity error, even if parity error …\nAn identifier for a PCI bus, device and function.\nInformation about a PCI device function.\nThe PCIe memory-mapped Enhanced Configuration Access …\nThe device can accept fast back-to-back transactions not …\nThe device is allowed to generate fast back-to-back …\nThe type of a PCI device function header.\nAssertion of the device’s INTx# signal is disabled.\nThe state of the device’s INTx# signal.\nThe BAR is for an I/O region.\nThe device can respond to I/O Space accesses.\nThe device reported an invalid BAR type.\nThe bus agent observed a parity error (if parity error …\nThe device can respond to Memory Space accesses.\nThe device can generate the Memory Write and Invalidate …\nThe device is capabile of running at 66 MHz rather than 33 …\nThe BAR is for a memory region.\nThe location allowed for a memory BAR.\nThe PCI memory-mapped Configuration Access Mechanism.\nThe device should take its normal action when a parity …\nA PCI to CardBus bridge.\nErrors accessing a PCI device.\nA PCI to PCI bridge.\nUsed to allocate MMIO regions for PCI BARs.\nThe root complex of a PCI bus.\nA master device transaction was terminated with …\nA master device transaction was terminated with …\nThe SERR# driver is enabled.\nA device asserts SERR#.\nA target device terminated a transaction with target-abort.\nThe device can monitor Special Cycle operations.\nA normal PCI device.\nThe status register in PCI configuration space.\nUnrecognised header type.\nThe device will snoop palette register data.\nThe BAR has a 32-bit address and can be mapped anywhere in …\nThe BAR has a 64-bit address and can be mapped anywhere in …\nGet a flags value with all known bits set.\nGet a flags value with all known bits set.\nAllocates a memory region with the given size.\nGets information about the given BAR of the given device …\nReturns information about all the given device function’…\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nGet the underlying bits value.\nGet the underlying bits value.\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe PCI bus number, between 0 and 255.\nGets an iterator over the capabilities of the given device …\nThe PCI class.\nThe bitwise negation (<code>!</code>) of the bits in a flags value, …\nThe bitwise negation (<code>!</code>) of the bits in a flags value, …\nWhether all set bits in a source flags value are also set …\nWhether all set bits in a source flags value are also set …\nThe device number on the bus, between 0 and 31.\nThe PCI device ID.\nThe intersection of a source flags value with the …\nThe intersection of a source flags value with the …\nGet a flags value with all bits unset.\nGet a flags value with all bits unset.\nEnumerates PCI devices on the given bus.\nThe bitwise or (<code>|</code>) of the bits in each flags value.\nThe bitwise or (<code>|</code>) of the bits in each flags value.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConvert from a bits value.\nConvert from a bits value.\nConvert from a bits value exactly.\nConvert from a bits value exactly.\nConvert from a bits value, unsetting any unknown bits.\nConvert from a bits value, unsetting any unknown bits.\nThe bitwise or (<code>|</code>) of the bits in each flags value.\nThe bitwise or (<code>|</code>) of the bits in each flags value.\nGet a flags value with the bits of a flag with the given …\nGet a flags value with the bits of a flag with the given …\nThe function number of the device, between 0 and 7.\nReads the status and command registers of the given device …\nThe type of PCI device.\nThe ID of the capability.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nWhether any set bits in a source flags value are also set …\nWhether any set bits in a source flags value are also set …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWhether all known bits in this flags value are set.\nWhether all known bits in this flags value are set.\nWhether all bits in this flags value are unset.\nWhether all bits in this flags value are unset.\nYield a set of contained flags values.\nYield a set of contained flags values.\nYield a set of contained named flags values.\nYield a set of contained named flags values.\nReturns the address and size of this BAR if it is a memory …\nCreates a new allocator from a memory range.\nWraps the PCI root complex with the given MMIO base …\nThe bitwise negation (<code>!</code>) of the bits in a flags value, …\nThe bitwise negation (<code>!</code>) of the bits in a flags value, …\nThe offset of the capability in the PCI configuration …\nThe third and fourth bytes of the capability, to save …\nThe PCI programming interface byte.\nThe intersection of a source flags value with the …\nThe intersection of a source flags value with the …\nThe PCI revision ID.\nCall <code>insert</code> when <code>value</code> is <code>true</code> or <code>remove</code> when <code>value</code> is …\nCall <code>insert</code> when <code>value</code> is <code>true</code> or <code>remove</code> when <code>value</code> is …\nSets the address of the given 32-bit memory or I/O BAR of …\nSets the address of the given 64-bit memory BAR of the …\nSets the command register of the given device function.\nReturns the total size in bytes of the memory-mapped …\nThe intersection of a source flags value with the …\nThe intersection of a source flags value with the …\nThe intersection of a source flags value with the …\nThe intersection of a source flags value with the …\nThe PCI subclass.\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nReturns whether this BAR is a 64-bit memory region, and so …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nReturns whether the device and function numbers are valid, …\nThe PCI vendor ID.\nThe memory address, always 16-byte aligned.\nThe I/O address, always 4-byte aligned.\nThe size of the BAR address and where it can be located.\nIf true, then reading from the region doesn’t have side …\nThe size of the BAR in bytes.\nThe size of the BAR in bytes.")